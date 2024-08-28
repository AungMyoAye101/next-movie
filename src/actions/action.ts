const API_KEY = process.env.API_KEY;

interface MoveFetchProps {
  genre: string;
}
export const movieDataFetch = async ({ genre }: MoveFetchProps) => {
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "top_rated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}`,
    { next: { revalidate: 3600 } }
  );
  if (!res.ok) {
    throw new Error("Failed to load.");
  }

  const result = await res.json();
  return result.results;
};

export const peopleDataFetching = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/person/popular?api_key=${process.env.API_KEY}&page=1`,
    { next: { revalidate: 3600 } }
  );
  const resData = await res.json();
  return resData.results;
};
