import { useContext } from "react";
import { movieContext } from "../context/createMovieContext";
import Button from "./Button";

function Movies() {
  const { trends, favorites, addToFavorites, newMovieRelease, criticAcclaim } = useContext(movieContext);
  return (
    <section className="screen" id="movies">
      <h1 className="page-title">Movies</h1>
      <div className="chip-row" data-scope="movies">
        <button className="chip active" data-genre="all">
          All
        </button>
        <button className="chip" data-genre="action">
          Action
        </button>
        <button className="chip" data-genre="drama">
          Drama
        </button>
        <button className="chip" data-genre="romance">
          Romance
        </button>
        <button className="chip" data-genre="horror">
          Horror
        </button>
        <button className="chip" data-genre="comedy">
          Comedy
        </button>
      </div>
      <div className="section-block">
        <h2 className="row-title">Trending now</h2>
        <div className="poster-row" id="row-movies-trending">
          {trends.map((trend) => (
            <div key={trend.id} className="poster g-action" tabIndex="0">
              <div
                className="poster-art"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${trend?.backdrop_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              ></div>

              <Button
                isFavorite={favorites.some((f) => f.id === trend.id)}
                onClick={() => addToFavorites(trend)}
              />
              <div className="poster-label">
                <div className="t">{trend?.title || trend?.name}</div>
                <div className="g">{trend?.release_date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-block">
        <h2 className="row-title">New releases</h2>
        <div className="poster-row" id="row-movies-new">
          {newMovieRelease.map((movie) => (
            <div key={movie.id} className="poster g-action" tabIndex="0">
              <div
                className="poster-art"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie?.backdrop_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              ></div>

              <Button
                isFavorite={favorites.some((f) => f.id === movie.id)}
                onClick={() => addToFavorites(movie)}
              />
              <div className="poster-label">
                <div className="t">{movie?.title || movie?.name}</div>
                <div className="g">{movie?.release_date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-block">
        <h2 className="row-title">Critically acclaimed</h2>
        <div className="poster-row" id="row-movies-acclaimed">
          {criticAcclaim.map((critic) => (
            <div key={critic.id} className="poster g-action" tabIndex="0">
              <div
                className="poster-art"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${critic?.backdrop_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "top",
                }}
              ></div>

              <Button
                isFavorite={favorites.some((f) => f.id === critic.id)}
                onClick={() => addToFavorites(critic)}
              />
              <div className="poster-label">
                <div className="t">{critic?.title || critic?.name}</div>
                <div className="g">{critic?.release_date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Movies;
