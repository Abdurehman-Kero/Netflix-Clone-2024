import "./banner.css";
import Axios from "../../utils/axios.js";
import { useEffect, useState } from "react";
import fetchData from "../../utils/request";

const truncate = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + "..." : string;
};

const Banner = () => {
  const [movie, setMovie] = useState({});

 useEffect(() => {
   const fetchMovie = async () => {
     try {
       const response = await Axios.get(fetchData.getUpcomingMovies);

       const results = response.data?.results;

       if (!results || results.length === 0) {
         console.warn("No movies returned");
         return;
       }

       setMovie(results[Math.floor(Math.random() * results.length)]);
     } catch (error) {
       console.error("Fetch error:", error);
     }
   };

   fetchMovie();
 }, []);


  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: movie?.backdrop_path
          ? `url("https://image.tmdb.org/t/p/original${movie.backdrop_path}")`
          : "none",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>

        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadeBottom" />
    </div>
  );
};

export default Banner;
