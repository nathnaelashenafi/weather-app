import { Search } from "lucide-react";
export function SearchBar({ cityName, setCityName, onSearch }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div id="searchBar">
      <input
        placeholder="Search by city"
        type="text"
        value={cityName}
        onChange={(event) => setCityName(event.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button id="searchIcon" onClick={onSearch}>
        <Search size={24} />
      </button>
    </div>
  );
}
