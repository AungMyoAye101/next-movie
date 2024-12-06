import { getPeopleDetail } from "@/ApiConfig";
import Footer from "@/components/Footer";
import PeopleInfo from "@/components/PeopleInfo";
import PersonCredit from "@/components/PersonCredit";
import Image from "next/image";
import React from "react";

const page = async ({ params }: { params: { personId: number } }) => {
  const id: number = params.personId;

  const data = await getPeopleDetail(id);

  return (
    <section>
      <PeopleInfo data={data} />
      <div className="px-6 space-y-2">
        <h1 className="text-xl font-semibold font-serif">Know For</h1>
        <PersonCredit person_id={id} />
      </div>
    </section>
  );
};

export default page;
