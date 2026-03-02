const SearchBar = ({ search, setSearch, setCurrentPage }) => {
  return (
    <input
      type="text"
      placeholder="Search product..."
      value={search}
      onChange={(e) => {
        setSearch(e.target.value);
        setCurrentPage(1);
      }}
    />
  );
};

export default SearchBar;