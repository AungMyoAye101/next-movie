import Footer from "@/components/Footer";
import PeopleData from "@/components/PeopleData";

const page = async () => {
  return (
    <div className="py-16 px-4 md:px-12 ">
      <h1 className="text-xl font-bold mb-4">People</h1>
      <PeopleData />
    </div>
  );
};

export default page;
