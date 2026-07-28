function Button({ onClick, isFavorite }) {
  return (
    <button
      className={`poster-fav${isFavorite ? " is-fav" : ""}`}
      onClick={onClick}
    >
      <svg viewBox="0 0 24 24">
        <path d="M12 21s-7-4.35-9.5-8.5C.9 9 2.5 5.5 6 5c2-.3 3.5.8 6 3 2.5-2.2 4-3.3 6-3 3.5.5 5.1 4 3.5 7.5C19 16.65 12 21 12 21z"></path>
      </svg>
    </button>
  );
}

export default Button;
