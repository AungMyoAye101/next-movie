import Image from "next/image";
import Link from "next/link";
import React from "react";

const Notfount = () => {
  return (
    <section className="min-h-screen flex  justify-center py-16 bg-gradient-to-br from-purple-100 to-purple-400 ">
      <div className="relative z-10 h-fit  font-semibold mt-6 flex flex-col items-center gap-4 ">
        <h1 className="text-2xl font-sans   ">404</h1>
        <span className="text-lg font-serif">Page Not Found</span>
        <Link href={"/"} className="text-lg font-serif hover:text-purple-600">
          Back to home page
        </Link>
      </div>
      <div className="absolute bottom-0">
        <Image
          src={"/luffy-1.png"}
          alt="luffy photo"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default Notfount;
