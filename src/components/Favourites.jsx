import { useContext } from "react";
import { movieContext } from "../context/createMovieContext";
import Button from "./Button";

function Favourites() {
  const { favorites, removeFromFavorite } = useContext(movieContext);

  return (
    <section className="screen" id="favorites">
      <h1 className="page-title">Favorites</h1>

      {favorites.length === 0 ? (
        <div className="fav-empty" id="fav-empty">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M12 21s-7-4.35-9.5-8.5C.9 9 2.5 5.5 6 5c2-.3 3.5.8 6 3 2.5-2.2 4-3.3 6-3 3.5.5 5.1 4 3.5 7.5C19 16.65 12 21 12 21z" />
          </svg>
          <h3>Nothing saved yet</h3>
          <p>Tap the heart on any title to keep it here.</p>
        </div>
      ) : (
        <div className="fav-grid" id="fav-grid">
          {favorites.map((fav) => (
            <div key={fav.id} className="poster g-drama" tabIndex="0" key={fav.id}>
              <div
                className="poster-art"
                style={{
                  backgroundImage: `url(https://image.tmdb.org/t/p/w500${fav?.backdrop_path})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <Button isFavorite={favorites.some((f) => f.id === fav.id)} onClick={() => removeFromFavorite(fav.id)} />


              <div className="poster-label">
                <div className="t">{fav?.name || fav?.title}</div>
                <div className="g">{fav?.release_date}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Favourites;