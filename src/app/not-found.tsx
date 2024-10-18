import Link from "next/link";
import React from "react";

const Notfount = () => {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div>
        <h1>Opps; Something wrong.Please try again!</h1>
        <Link
          href={"/"}
          className="px-4 py-2 rounded-full cursor-pointer hover:bg-purple-400"
        >
          Go back to home page
        </Link>
      </div>
    </section>
  );
};

export default Notfount;
