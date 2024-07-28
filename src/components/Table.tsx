"use client";

import { motion } from "framer-motion";
import React from "react";
interface MovieData {
  status: string;
  budget: number;
  production: { name: string }[];
  homePage: string;
}

const Table = ({ status, budget, production, homePage }: MovieData) => {
  return (
    <motion.div
      className="overflow-x-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <table className="table">
        {/* head */}
        <thead className="text-lg">
          <tr>
            <th>Status</th>
            <th>Budget</th>
            <th>Production</th>

            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <th>{status}</th>
            <td>{budget || "-"}</td>
            <td>{production[0].name || "-"}</td>

            <td>
              <a href={homePage} target="_blank">
                Original page
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

export default Table;
