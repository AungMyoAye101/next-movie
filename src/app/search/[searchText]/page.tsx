import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Results from "@/components/Results";
import SearchBox from "@/components/SearchBox";
import SearchNav from "@/components/SearchNav";
import Link from "next/link";
import { useRouter } from "next/router";

const SearchText = ({ params }: { params: { searchText: string } }) => {
  const searchText = params.searchText;

  return (
    <div className="py-20 px-4 ">
      <Results searchText={searchText} />
    </div>
  );
};

export default SearchText;
