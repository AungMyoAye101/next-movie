"use client";

import Image from "next/image";
import Link from "next/link";

const error = () => {
  return (
    <section className="min-h-screen flex  justify-center py-16 bg-gradient-to-br from-purple-100 to-purple-400 ">
      <div className="relative z-10 h-fit  font-semibold mt-16 flex flex-col items-center gap-4 ">
        <h1 className="text-2xl  text-center">Opps; Something went worng!</h1>

        <Link href={"/"} className="text-lg font-serif hover:text-purple-600">
          Try again
        </Link>
      </div>
      <div className="absolute bottom-0">
        <Image
          src={"/luffy-2.png"}
          alt="luffy photo"
          width={400}
          height={400}
        />
      </div>
    </section>
  );
};

export default error;
