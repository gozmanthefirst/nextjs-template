import type { ReactNode } from "react";
import type { Metadata } from "next";

import { cn } from "@/global/lib/utils/cn";
import { geistSans } from "@/styles/fonts";
import { geistMono } from "../styles/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Next.js Template",
  description: "Next.js Template",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en">
      <body
        className={cn("antialiased", geistSans.className, geistMono.className)}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
