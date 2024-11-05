import Image from "next/image";
import Results from "./components/Results";
import Errors from "./errors";
const API_KEY = process.env.API_KEY;
export default async function Home({searchParams}) {
  const genre = searchParams?.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=79266ac2395bdfd9ef624b2d52a20a4f&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );
  const data = await res.json();
  const results = data.results;
  // console.log(results);
  return (
    <div >
      <Results results={results}/>
      <h1>Hell World</h1>
      <Errors/>
    </div>
  );
}
