import MovieResults from "@/components/MovieResults";
import React from "react";

const API_KEY = process.env.API_KEY;

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "getTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "getTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const results = data.results;

  return <MovieResults results={results} />;
};

export default Home;
