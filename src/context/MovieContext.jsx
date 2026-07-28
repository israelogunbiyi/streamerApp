import { useEffect, useState } from "react";
import { movieContext } from "./createMovieContext";
import endpoints from "../api-key-link";

const { movies, feature, tv, trending, topRated, onAir,  recomm, newReleases, criticAcc } = endpoints;

function MovieProvider({ children }) {
  const [favorites, setFavorites] = useState(() => {
    const stored = localStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  });
  const [trends, setTrends] = useState([]);
  const [featuredFilm, setFeaturedFilm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tvShows, setTvShows] = useState([]);
  const [currentWatchs, setcurrentWatch] = useState([]);
  const [topTvSeries, setTopTvSeries] = useState([]);
  const [newEpisodes, setNewEpisodes] = useState([]);
  const [recommends, setRecommends] = useState([]);
  const [newMovieRelease, setNewMovieRelease] = useState([]);
  const [criticAcclaim, setCriticAcclaim] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        const res = await fetch(movies);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        setTrends(data.results ?? data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  useEffect(() => {
    const fetchFeaturesOnly = async () => {
      try {
        const response = await fetch(feature);
        console.log(response.text);
        if (!response.ok) {
          throw new Error("Something went wrong with fetching");
        }
        const featuredMovie = await response.json();
        console.log("feature:", featuredMovie.results[0]);
        setFeaturedFilm(featuredMovie.results[0]);
      } catch (error) {
        console.error("Error:", error.message);
      }
    };
    fetchFeaturesOnly();
  }, []);

  useEffect(() => {
    const fetchTv = async () => {
      try {
        setLoading(true);
        const res = await fetch(tv);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        setTvShows(data.results ?? data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTv();
  }, []);

  useEffect(() => {
    const fetchCurrentWatch = async () => {
      try {
        setLoading(true);
        const res = await fetch(trending);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        setcurrentWatch(data.results ?? data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentWatch();
  }, []);

  useEffect(() => {
    const fetchTopTv = async () => {
      try {
        setLoading(true);
        const res = await fetch(topRated);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        setTopTvSeries(data.results ?? data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTopTv();
  }, []);

  useEffect(() => {
    const fetchNewEpisodes = async () => {
      try {
        setLoading(true);
        const res = await fetch(onAir);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        setNewEpisodes(data.results ?? data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNewEpisodes();
  }, []);

  useEffect(() => {
    const fetchRecommend = async () => {
      try {
        setLoading(true);
        const res = await fetch(recomm);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        setRecommends(data.results ?? data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommend();
  }, []);

  useEffect(() => {
    const fetchRecommend = async () => {
      try {
        setLoading(true);
        const res = await fetch(newReleases);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        setNewMovieRelease(data.results ?? data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommend();
  }, []);

  useEffect(() => {
    const criticAcclaimed = async () => {
      try {
        setLoading(true);
        const res = await fetch(criticAcc);
        if (!res.ok) {
          throw new Error(`Request failed with status ${res.status}`);
        }
        const data = await res.json();
        setCriticAcclaim(data.results ?? data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    criticAcclaimed();
  }, []);




  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);
  function addToFavorites(movieId) {
    setFavorites((prev) =>
      prev.includes(movieId) ? prev : [...prev, movieId],
    );
  }

  const removeFromFavorite = (movieId) => {
    setFavorites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  return (
    <movieContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorite,
        trends,
        loading,
        error,
        featuredFilm,
        tvShows,
        currentWatchs,
        topTvSeries,
        newEpisodes,
        recommends,
        newMovieRelease,
        criticAcclaim
      }}
    >
      {children}
    </movieContext.Provider>
  );
}

export default MovieProvider;
