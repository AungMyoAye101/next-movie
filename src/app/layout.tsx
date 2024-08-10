import type { Metadata } from "next";

import "./globals.css";
import Header from "../components/Header";
import Transition from "@/components/Transition";
import Footer from "@/components/Footer";

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
        <Header />
        <Transition>{children}</Transition>
        <Footer />
      </body>
    </html>
  );
}
