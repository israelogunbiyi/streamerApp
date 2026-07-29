import { useContext } from "react";
import { movieContext } from "../context/createMovieContext";
import Button from "./Button";

function Home() {
  const {
    trends,
    favorites,
    featuredFilm,
    addToFavorites,
    tvShows,
    currentWatchs,
  } = useContext(movieContext);
  console.log(featuredFilm);

  return (
    <section className="screen active" id="home">
      <div
        className="hero"
        style={{
          backgroundImage: `url(${
            featuredFilm?.backdrop_path
              ? `https://image.tmdb.org/t/p/w500${featuredFilm.backdrop_path}`
              : "/public/fallback-hero.png"
          })`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="hero-content">
          <div className="hero-eyebrow">Featured today</div>
          <div className="hero-title">
            {featuredFilm?.title || "The Odyssey"}
          </div>
          <p className="hero-desc">
            {featuredFilm?.overview ||
              "After the Trojan War, Odysseus faces a dangerous voyage back to Ithaca, meeting creatures like the Cyclops Polyphemus, Sirens, and Calypso along the way."}
          </p>
          <div className="hero-actions">
            <button key={featuredFilm?.id} className="btn btn-primary">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </button>
            <button className="btn btn-ghost">More info</button>
          </div>
        </div>
      </div>

      <div className="section-block">
        <h2 className="row-title">Trending movies</h2>
        <div className="poster-row" id="row-trending-movies">
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
        <h2 className="row-title">Trending TV shows</h2>
        <div className="poster-row" id="row-trending-shows">
          {tvShows.map((tv) => (
            <div key={tv.id} className="poster g-thriller" tabIndex="0">
              <div
                className="poster-art"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${tv?.backdrop_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <Button
                isFavorite={favorites.some((f) => f.id === tv.id)}
                onClick={() => addToFavorites(tv)}
              />
              <div className="poster-label">
                <div className="t">{tv.title || tv.name}</div>
                <div className="g">{tv.first_air_date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="section-block">
        <h2 className="row-title">Continue watching</h2>
        <div className="poster-row" id="row-continue">
          {currentWatchs.map((current) => (
            <div key={current.id} className="poster g-thriller" tabIndex="0">
              <div
                className="poster-art"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${current?.backdrop_path})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <span className="poster-badge">Resume</span>
              <Button
                isFavorite={favorites.some((f) => f.id === current.id)}
                onClick={() => addToFavorites(current)}
              />
              <div className="poster-label">
                <div className="t">{current.title || current.name}</div>
                <div className="g">{current.release_date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
