"use client";

import Link from "next/link";

const error = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <h1 className="text-lg text-yellow-400 font-sans">
        Something went wrong!
      </h1>
      <Link href={"/"} className="btn btn-warning">
        Go back to home page.
      </Link>
    </div>
  );
};

export default error;
