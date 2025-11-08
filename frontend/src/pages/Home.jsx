import { useState } from "react";
import MovieCard from "../components/MovieCard";
import '../css/Home.css'

export default function Home() {
  const movies = [
    { id: 1, title: "Breaking Bad", release_date: "2008" },
    { id: 2, title: "Game of Thrones", release_date: "2011" },
    { id: 3, title: "Stranger Things", release_date: "2016" },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(searchQuery);
    setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map((m) => <MovieCard movie={m} key={m.id} />)}
      </div>
    </div>
  );
}
