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
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Search Results</h1>
      <Results searchText={searchText} />
      <Footer />
    </div>
  );
};

export default SearchText;
