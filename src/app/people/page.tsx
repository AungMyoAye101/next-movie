import PeopleData from "@/components/PeopleData";

const page = async () => {
  return (
    <div className="p-6 ">
      <h1 className="text-xl font-bold mb-4">People</h1>
      <PeopleData />
    </div>
  );
};

export default page;
