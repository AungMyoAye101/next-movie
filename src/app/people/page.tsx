import Footer from "@/components/Footer";
import PeopleData from "@/components/PeopleData";

const page = async () => {
  return (
    <div className="py-20 px-4  ">
      <h1 className="text-xl font-bold mb-4">People</h1>
      <PeopleData />
      <Footer />
    </div>
  );
};

export default page;
