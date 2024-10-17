import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/Header";
import Transition from "@/components/Transition";
import Footer from "@/components/Footer";
import { Providers } from "./Provider";

export const metadata: Metadata = {
  title: "Rare Movie App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="max-w-7xl mx-auto">
            <Header />
            <Transition>{children}</Transition>
          </div>
        </Providers>
      </body>
    </html>
  );
}
