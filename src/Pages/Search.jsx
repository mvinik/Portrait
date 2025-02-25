import React, { useState, useEffect } from 'react';
import data from '../Assets/product.json';  // Your product data

const Search = ({ isOpen, closeSearchBar }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  // Filter products based on query when the search bar is opened
  useEffect(() => {
    if (isOpen) {
      // If there's no query, show "No results found"
      if (query === '') {
        setResults([]); // No query means no results to show
      } else {
        // Filter products when query is not empty
          const filteredResults = data.filter((product) => {
          const amtAsString = product.amt ? String(product.amt) : '';
          
          // Check if any field matches the query (case-insensitive)
          const matchesName = product.name.toLowerCase().includes(query.toLowerCase());
          const matchesPic = product.pic && product.pic.toLowerCase().includes(query.toLowerCase());
          const matchesAmt = amtAsString.toLowerCase().includes(query.toLowerCase());

          return matchesName || matchesPic || matchesAmt;
        });

        setResults(filteredResults); // Update results based on the filter
      }
    }
  }, [query, isOpen]); // Dependency on both query and isOpen

  // Handle search input change
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div
      className={`fixed top-0 right-0 h-full bg-white w-80 transition-all duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      style={{ zIndex: 9999 }}
    >
      <div className="flex justify-between items-center p-5">
        {/* Search Input */}
        <input
          type="text"
          value={query}
          onChange={handleSearchChange}
          className="w-full p-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-gray-200"
          placeholder="What are you looking for?"
        />

        {/* Close Button */}
        <button onClick={closeSearchBar} className="text-gray-900">
          <span className="p-3 text-center text-2xl">&times;</span>
        </button>
      </div>

      {/* Display Search Results */}
      <div className="p-4">
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index} className="py-2">
                <img src={result.pic} alt={result.name} className="w-full h-32 object-cover mb-2" />
                <strong>{result.name}</strong>: {result.amt}
                <p>{result.description}</p>
              </li>
            ))}
          </ul>
        ) : query === '' ? (
          <p></p> // Show this if the query is empty and there are no results
        ) : (
          <p>No results found.</p> // Show this if there are no results that match the query
        )}
      </div>
    </div>
  );
};

export default Search;
