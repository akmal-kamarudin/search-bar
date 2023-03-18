function Search({ searchTerm, handleSearch }) {
  return (
    <div className="grid h-screen place-items-center">
      Search
      <input type="text" value={searchTerm} onChange={handleSearch} />
    </div>
  );
}

export default Search;
