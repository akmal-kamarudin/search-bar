function Search({ searchTerm, handleSearch }) {
  return (
    <div>
      <div className="mt-2">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          id="name"
          className="peer px-4 block w-full border-0 rounded-md bg-slate-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 shadow-md shadow-slate-50/40"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Search;
