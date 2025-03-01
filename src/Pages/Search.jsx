import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({ isOpen, closeSearchBar }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navDetails=useNavigate(); // For navigating to product details page

  // Fetch and filter products based on query when search bar is opened
  useEffect(() => {
    if (isOpen && query !== '') {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch('https://test4-ayw7.onrender.com/api/paints?populate=image');
          if (!response.ok) {
            throw new Error('Failed to fetch products');
          }
          const data = await response.json();
          
          // Filter products based on query
          const filteredResults = data.data
            .map((product) => ({
              id: product.id,
              name: product.name,
              price: product.price,
              imageUrl: product.image.url
            }))
            .filter((product) => {
              const matchesName = product.name.toLowerCase().includes(query.toLowerCase());
              const matchesPrice = product.price.toLowerCase().includes(query.toLowerCase());
              return matchesName || matchesPrice;
            });

          setResults(filteredResults);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };

      fetchData();
    } else {
      setResults([]); // Reset results if query is empty
    }
  }, [isOpen, query]); // Re-fetch when `isOpen` or `query` changes

  // Handle search input change
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // Navigate to the product details page
  const handleProductClick = () => {
    navDetails(`/product/${results.documentId}`); // Assuming your route is something like `/product/:id`
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
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {results.length > 0 ? (
          <ul>
            {results.map((result, index) => (
              <li key={index} className="py-2 cursor-pointer" onClick={() => handleProductClick(result.documentId)}>
                <img src={result.imageUrl} alt={result.name} className="w-full h-32 object-cover mb-2" />
                <strong>{result.name}</strong>: {result.price}
              </li>
            ))}
          </ul>
        ) : query === '' ? (
          <p>Start typing to search...</p>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Search;
