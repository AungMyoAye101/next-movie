import React from "react";
import Person from "./Person";
import { getPeople } from "@/ApiConfig";

const PeopleData = async () => {
  const resData = await getPeople();
  const data = resData.results;
  return (
    <div>
      <Person data={data} />
    </div>
  );
};

export default PeopleData;
