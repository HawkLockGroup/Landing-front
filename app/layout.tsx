import React from "react";
// import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";

// const inter = Inter({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   variable: "--font-inter",
// });
// const spaceGrotesk = Space_Grotesk({
//   subsets: ["latin"],
//   weight: ["300", "400", "500", "600", "700"],
//   variable: "--font-spaceGrotesk",
// });

export const metadata: Metadata = {
  title: "SEALSED: Pioneering the Escrow Revolution",
  description:
    "Embark on a journey of unbreakable security and swift decentralized trades with SEALSED",
  icons: {
    icon: "/assets/images/site-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="custom-scrollbar"
        //  className={`${inter.variable} ${spaceGrotesk.variable}`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
