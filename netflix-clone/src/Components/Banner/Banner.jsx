import "./banner.css";
import Axios from "../../utils/base";
import { useEffect, useState } from "react";
import fetchData from "../../utils/request";

const Banner = () => {

const [movie, setMovie] = useState({});

useEffect(() => {
  (async () => {
    try {
      const request = await Axios.get(fetchData.getUpcomingMovies);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    } catch (error) {
      console.log("error", error);
    }
  })();
}, []);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
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
