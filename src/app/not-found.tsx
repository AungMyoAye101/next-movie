import Link from "next/link";
import React from "react";

const Notfount = () => {
  return (
    <div className="mt-10 text-center space-y-3">
      <h1>Opps; Something wrong.Please try again!</h1>
      <Link href={"/"} className="btn btn-ghost">
        Go back to home page
      </Link>
    </div>
  );
};

export default Notfount;
