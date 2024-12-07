import React from "react";
import ImageCard, { CardDetailProps } from "./Card";
import Image from "next/image";
import Link from "next/link";
import { getPersonCredit } from "@/ApiConfig";
import VideoCon from "./VideoCon";

interface PersonCreditProps {
  person_id: number;
}
const PersonCredit = async ({ person_id }: PersonCreditProps) => {
  const data = await getPersonCredit(person_id);
  const personalInfo: CardDetailProps[] = data.cast;

  return (
    <section>
      <VideoCon data={personalInfo} />
    </section>
  );
};

export default PersonCredit;
