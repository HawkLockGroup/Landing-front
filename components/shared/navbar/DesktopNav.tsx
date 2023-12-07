"use client";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function DesktopNav() {
  const pathName = usePathname();
  return (
    <div className="background-light900_dark200 hidden border-none lg:flex lg:flex-1">
      <section className="flex w-full flex-row items-center justify-between">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathName.includes(item.route) && item.route.length > 1) ||
            pathName === item.route;
          return (
            <div key={item.route}>
              <Link
                className={`${
                  isActive
                    ? "primary-gradient rounded-lg text-light-900"
                    : "text-dark300_light900"
                } flex items-center justify-start gap-4 bg-transparent p-4`}
                href={item.route}
              >
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={`${isActive ? "" : "invert-colors"}`}
                />
                <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                  {item.label}
                </p>
              </Link>
            </div>
          );
        })}
        <Link href="/" className="">
          <Button className="small-medium btn-secondary primary-gradient min-h-[41px] justify-center rounded-lg px-4 py-3 text-light-900 shadow-none">
            Go To App
          </Button>
        </Link>
      </section>
    </div>
  );
}

export default DesktopNav;
