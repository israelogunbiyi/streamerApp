import { useContext, useState } from "react";
import { movieContext } from "../context/createMovieContext";
import Button from "./Button";

function Search() {
  const { trends, tvShows, addToFavorites, favorites } =
    useContext(movieContext);
  const combined = [...trends, ...tvShows];

  const [search, setSearch] = useState("");
  const [recentlySearch, setRecentlySearch] = useState([]);

  const handleSearch = (value) => {
  setSearch(value);
  if (value.trim() === "") return;   

  setRecentlySearch((prev) => {
    const filtered = prev.filter(
      (item) => item.toLowerCase() !== value.toLowerCase(),
    );
    return [value, ...filtered].slice(0, 5);
  });
};

  const filteredMovies = combined.filter((movie) => {
    const title = movie.title || movie.name || "";
    return title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <section className="screen" id="search">
      <h1 className="page-title">Search</h1>

      <div className="search-wrap">
        <div className="search-box" id="search-box">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>

          <input
            className="search-input"
            id="search-input"
            type="text"
            placeholder="Search movies, shows, and more"
            autoComplete="off"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />

          <button
            className="search-clear"
            id="search-clear"
            style={{ display: search ? "block" : "none" }}
            onClick={() => setSearch("")}
          >
            Clear
          </button>
        </div>

        <div id="recent-block">
          <h2 className="row-title" style={{ fontSize: "14px" }}>
            Recent searches
          </h2>
          <div className="recent-row" id="recent-row">
            {recentlySearch.map((item, index) => (
              <button
                key={index}
                className="chip"
                onClick={() => handleSearch(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="keyboard" id="keyboard"></div>

        <div id="results-block" style={{ display: search ? "block" : "none" }}>
          <div className="search-results-title" id="results-title">
            {filteredMovies.length > 0
              ? `${filteredMovies.length} result${filteredMovies.length !== 1 ? "s" : ""} for "${search}"`
              : `No results for "${search}"`}
          </div>

          <div className="search-results-grid" id="results-grid">
            {filteredMovies.length === 0 ? (
              <div className="no-results">
                Try a different title or browse Movies and TV shows instead.
              </div>
            ) : (
              filteredMovies.map((item) => (
                <div key={item.id} className="poster g-action" tabIndex="0">
                  <div
                    className="poster-art"
                    style={{
                      backgroundImage: `url(https://image.tmdb.org/t/p/w500${item?.backdrop_path})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                  <Button
                    isFavorite={favorites.some((f) => f.id === item.id)}
                    onClick={() => addToFavorites(item)}
                  />
                  <div className="poster-label">
                    <div className="t">{item?.title || item?.name}</div>
                    <div className="g">
                      {item?.release_date || item?.first_air_date}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Search;
