import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Movies.css';

const Movies = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); 
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchMovies = async (query) => {
        if (!query) return; 
        try {
            setLoading(true);
            setError(false);
            const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=1de2125d`);
            setMoviesData(response.data.Search || []);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault(); 
        fetchMovies(searchQuery);
    };

    return (
        <div className="movies-container">
            <h1 className="title">Movie Finder</h1>
            
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for a movie..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            {loading && <div className="loading">Loading...</div>}
            {error && <div className="error">Error: Something went wrong</div>}

            <ul className="movies-list">
                {moviesData.map((movie) => (
                    <li key={movie.imdbID} className="movie-item">
                        <h2 className="movie-title">{movie.Title} ({movie.Year})</h2>
                        <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
                       
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Movies;

