import { useState } from "react";

function Search(props) {
  const [searchTerm, setSearchTerm] = useState();

  return (
    <div>
      <label>Search</label>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Search;
