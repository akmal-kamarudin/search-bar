import { useState } from "react";

function Search({ searchTerm, handleSearch }) {
  return (
    <div>
      <label>Search</label>
      <input type="text" value={searchTerm} onChange={handleSearch} />
    </div>
  );
}

export default Search;

// (e) => setSearchTerm(e.target.value)
