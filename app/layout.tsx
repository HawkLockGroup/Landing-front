import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
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
      <body className="custom-scrollbar">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
