
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import TvShows from "./components/TvShows";
import Movies from "./components/Movies";
import Favourites from "./components/Favourites";
import Search from "./components/Search";
import Settings from "./components/Settings";
import MovieProvider from "./context/MovieContext";

function App() {

  return (
    <div className="app">
      <Navbar />
      <MovieProvider>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/search" element={<Search />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;
