import React, { useState } from 'react';
import axios from 'axios';
import './Searchbox.css'; 

const Searchbox = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/search?q=${query}`);
      console.log(response.data);
      setResults(response.data.items);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Digital Brain Media</h1>
      </header>
      <main className="app-main">
        <div className="search-container">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter search query"
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">
            Search
          </button>
        </div>
        <ul className="results-list">
          {results.map((result) => (
           
           <li key={result.link} className="result-item">
              <a href={result.link} className="result-link">
                {result.title}
              </a>
              <p>{result.snippet}</p>
            </li>

          ))}
        </ul>
      </main>
    </div>
  );
};

export default Searchbox;

