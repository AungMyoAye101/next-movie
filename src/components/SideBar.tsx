import React from "react";
import { navLinks } from "./Header";
import Link from "next/link";

const SideBar = () => {
  return (
    <section className="absolute top-10 h-screen ">
      <div>
        {navLinks.map((l, i) => (
          <Link href={l.link} key={i}>
            {l.name}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default SideBar;
