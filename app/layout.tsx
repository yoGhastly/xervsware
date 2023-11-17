import type { Metadata } from "next";
import { GeistSans } from "geist/font";
import { Providers } from "./Providers";

import "./globals.css";

export const metadata: Metadata = {
  title: "Xervsware",
  description: `Xervsware is a leading software company providing cutting-edge 
  solutions and services to elevate your business. Our expertise 
  includes custom software development, innovative IT solutions, and strategic consulting. 
  Explore how Xervsware can empower your organization with tailored software solutions
  and drive digital transformation.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
