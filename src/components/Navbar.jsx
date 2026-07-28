import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <nav className="topnav">
      <div className="topnav-inner" id="topnav">

        <NavLink
          to="/"
          className={({ isActive }) => `navitem ${isActive ? 'active' : ''}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 11l9-8 9 8"/>
            <path d="M5 10v10h14V10"/>
          </svg>
          Home
        </NavLink>

        <NavLink
          to="/tvshows"
          className={({ isActive }) => `navitem ${isActive ? 'active' : ''}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="5" width="18" height="13" rx="2"/>
            <path d="M8 21h8"/>
          </svg>
          TV Shows
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) => `navitem ${isActive ? 'active' : ''}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="16" rx="2"/>
            <path d="M7 4v16M17 4v16M3 9h4M17 9h4M3 15h4M17 15h4"/>
          </svg>
          Movies
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) => `navitem ${isActive ? 'active' : ''}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 21s-7-4.35-9.5-8.5C.9 9 2.5 5.5 6 5c2-.3 3.5.8 6 3 2.5-2.2 4-3.3 6-3 3.5.5 5.1 4 3.5 7.5C19 16.65 12 21 12 21z"/>
          </svg>
          Favorites
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) => `navitem ${isActive ? 'active' : ''}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7"/>
            <path d="M21 21l-4.3-4.3"/>
          </svg>
          Search
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) => `navitem ${isActive ? 'active' : ''}`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 15 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
          Settings
        </NavLink>

      </div>
    </nav>
  )
}

export default Navbar