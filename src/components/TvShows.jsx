import { useContext } from "react";
import { movieContext } from "../context/createMovieContext";
import Button from "./Button";

function TvShows() {
  const { topTvSeries, favorites, addToFavorites, newEpisodes, recommends } =
    useContext(movieContext);
  return (
    <section className="screen active" id="tvshows">
      <h1 className="page-title">TV shows</h1>
      <div className="chip-row" data-scope="shows">
        <button className="chip active" data-genre="all">
          All
        </button>
        <button className="chip" data-genre="drama">
          Drama
        </button>
        <button className="chip" data-genre="comedy">
          Comedy
        </button>
        <button className="chip" data-genre="scifi">
          Sci-fi
        </button>
        <button className="chip" data-genre="thriller">
          Thriller
        </button>
        <button className="chip" data-genre="anime">
          Anime
        </button>
        <button className="chip" data-genre="doc">
          Documentary
        </button>
      </div>
      <div className="section-block">
        <h2 className="row-title">Top Rated</h2>
        <div className="poster-row" id="row-shows-popular">
          {topTvSeries.map((top) => (
            <div key={top.id} className="poster g-thriller" tabIndex="0">
              <div
                className="poster-art"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${top?.backdrop_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <Button
                isFavorite={favorites.some((f) => f.id === top.id)}
                onClick={() => addToFavorites(top)}
              />
              <div className="poster-label">
                <div className="t">{top.title || top.name}</div>
                <div className="g">
                  {top.release_date || top.first_air_date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-block">
        <h2 className="row-title">New episodes</h2>
        <div className="poster-row" id="row-shows-new">
          {newEpisodes.map((newEpisode) => (
            <div key={newEpisode.id} className="poster g-thriller" tabIndex="0">
              <div
                className="poster-art"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${newEpisode?.backdrop_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <Button
                isFavorite={favorites.some((f) => f.id === newEpisode.id)}
                onClick={() => addToFavorites(newEpisode)}
              />
              <div className="poster-label">
                <div className="t">{newEpisode.title || newEpisode.name}</div>
                <div className="g">
                  {newEpisode.release_date || newEpisode.first_air_date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-block">
        <h2 className="row-title">Because you watched Game of Thrones</h2>
        <div className="poster-row" id="row-shows-because">
          {recommends.map((recommend) => (
            <div key={recommend.id} className="poster g-thriller" tabIndex="0">
              <div
                className="poster-art"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${recommend?.backdrop_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <Button
                isFavorite={favorites.some((f) => f.id === recommend.id)}
                onClick={() => addToFavorites(recommend)}
              />
              <div className="poster-label">
                <div className="t">{recommend.title || recommend.name}</div>
                <div className="g">
                  {recommend.release_date || recommend.first_air_date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TvShows;
