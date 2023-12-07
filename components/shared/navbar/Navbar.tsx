import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

function Navbar() {
  return (
    // HTML5 nav semantic tag
    <nav className="background-light900_dark200 fixed z-50 flex w-full flex-row justify-between gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12 lg:justify-normal">
      {/* name&logo */}
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.png"
          width={23}
          height={23}
          alt="HawkLock Image"
        />
        <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          <span className="text-primary-500">HawkLock</span>
        </p>
      </Link>
      {/* desktop nv */}
      <DesktopNav />
      <div className="flex-between gap-5">
        {/* theme btn */}
        <Theme />
        {/* mobile nav */}
        <MobileNav />
      </div>
    </nav>
  );
}

export default Navbar;
