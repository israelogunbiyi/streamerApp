import { useContext, useState } from "react";
import { movieContext } from "../context/createMovieContext";
import Button from "./Button";


const GENRE_MAP = {
  action: 28,
  drama: 18,
  romance: 10749,
  horror: 27,
  comedy: 35,
};

const CHIPS = [
  { key: "all", label: "All" },
  { key: "action", label: "Action" },
  { key: "drama", label: "Drama" },
  { key: "romance", label: "Romance" },
  { key: "horror", label: "Horror" },
  { key: "comedy", label: "Comedy" },
];

function Movies() {
  const { trends, favorites, addToFavorites, newMovieRelease, criticAcclaim } =
    useContext(movieContext);

  const [activeGenre, setActiveGenre] = useState("all");

  const filterByGenre = (list) => {
    if (activeGenre === "all") return list;
    const genreId = GENRE_MAP[activeGenre];
    return list.filter((item) => item.genre_ids?.includes(genreId));
  };

  const filteredTrends = filterByGenre(trends);
  const filteredNew = filterByGenre(newMovieRelease);
  const filteredAcclaim = filterByGenre(criticAcclaim);

  return (
    <section className="screen" id="movies">
      <h1 className="page-title">Movies</h1>
      <div className="chip-row" data-scope="movies">
        {CHIPS.map((chip) => (
          <button
            key={chip.key}
            className={`chip ${activeGenre === chip.key ? "active" : ""}`}
            data-genre={chip.key}
            onClick={() => setActiveGenre(chip.key)}
          >
            {chip.label}
          </button>
        ))}
      </div>

      <div className="section-block">
        <h2 className="row-title">Trending now</h2>
        <div className="poster-row" id="row-movies-trending">
          {filteredTrends.length === 0 ? (
            <p className="empty-state">No trending titles in this genre.</p>
          ) : (
            filteredTrends.map((trend) => (
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
            ))
          )}
        </div>
      </div>

      <div className="section-block">
        <h2 className="row-title">New releases</h2>
        <div className="poster-row" id="row-movies-new">
          {filteredNew.length === 0 ? (
            <p className="empty-state">No new releases in this genre.</p>
          ) : (
            filteredNew.map((movie) => (
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
            ))
          )}
        </div>
      </div>

      <div className="section-block">
        <h2 className="row-title">Critically acclaimed</h2>
        <div className="poster-row" id="row-movies-acclaimed">
          {filteredAcclaim.length === 0 ? (
            <p className="empty-state">No critically acclaimed titles in this genre.</p>
          ) : (
            filteredAcclaim.map((critic) => (
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Movies;