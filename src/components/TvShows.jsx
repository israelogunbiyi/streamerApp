import { useContext, useState } from "react";
import { movieContext } from "../context/createMovieContext";
import Button from "./Button";


const GENRE_MAP = {
  drama: 18,
  comedy: 35,
  scifi: 10765,  
  thriller: 9648, 
  anime: 16,     
  doc: 99,
};

const CHIPS = [
  { key: "all", label: "All" },
  { key: "drama", label: "Drama" },
  { key: "comedy", label: "Comedy" },
  { key: "scifi", label: "Sci-fi" },
  { key: "thriller", label: "Thriller" },
  { key: "anime", label: "Anime" },
  { key: "doc", label: "Documentary" },
];

function TvShows() {
  const { topTvSeries, favorites, addToFavorites, newEpisodes, recommends } =
    useContext(movieContext);

  const [activeGenre, setActiveGenre] = useState("all");

  const filterByGenre = (list) => {
    if (activeGenre === "all") return list;
    const genreId = GENRE_MAP[activeGenre];
    return list.filter((item) => item.genre_ids?.includes(genreId));
  };

  const filteredTop = filterByGenre(topTvSeries);
  const filteredNew = filterByGenre(newEpisodes);
  const filteredRecs = filterByGenre(recommends);

  return (
    <section className="screen active" id="tvshows">
      <h1 className="page-title">TV shows</h1>
      <div className="chip-row" data-scope="shows">
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
        <h2 className="row-title">Top Rated</h2>
        <div className="poster-row" id="row-shows-popular">
          {filteredTop.length === 0 ? (
            <p className="empty-state">No top-rated shows in this genre.</p>
          ) : (
            filteredTop.map((top) => (
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
            ))
          )}
        </div>
      </div>

      <div className="section-block">
        <h2 className="row-title">New episodes</h2>
        <div className="poster-row" id="row-shows-new">
          {filteredNew.length === 0 ? (
            <p className="empty-state">No new episodes in this genre.</p>
          ) : (
            filteredNew.map((newEpisode) => (
              <div
                key={newEpisode.id}
                className="poster g-thriller"
                tabIndex="0"
              >
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
                  <div className="t">
                    {newEpisode.title || newEpisode.name}
                  </div>
                  <div className="g">
                    {newEpisode.release_date || newEpisode.first_air_date}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="section-block">
        <h2 className="row-title">Because you watched Game of Thrones</h2>
        <div className="poster-row" id="row-shows-because">
          {filteredRecs.length === 0 ? (
            <p className="empty-state">No recommendations in this genre.</p>
          ) : (
            filteredRecs.map((recommend) => (
              <div
                key={recommend.id}
                className="poster g-thriller"
                tabIndex="0"
              >
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
                  <div className="t">
                    {recommend.title || recommend.name}
                  </div>
                  <div className="g">
                    {recommend.release_date || recommend.first_air_date}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default TvShows;