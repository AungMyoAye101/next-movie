"use client";

import Link from "next/link";

const error = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-lg text-yellow-400 font-sans">
          Something went wrong!
        </h1>
        <Link href={"/"} className="px-4 py-2 rounded-full text-rose-400">
          Go back to home page.
        </Link>
      </div>
    </div>
  );
};

export default error;
