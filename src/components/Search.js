function Search({ searchTerm, handleSearch }) {
  return (
    <div className="">
      Search
      <input type="text" value={searchTerm} onChange={handleSearch} />
    </div>
  );
}

export default Search;
