import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";

function SearchBar() {
  const [months, setMonths] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  const [debouncedSearch, setDebouncedSearch] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/analytics")
      .then((res) => res.json())
      .then((data) => {
        setMonths(data);
      })
      .catch(() => setMsg("Failed to load data"));
  }, []);

  const filteredMonth = months.filter((month) =>
    month.month.toLowerCase().includes(search.toLowerCase())
  );
 
  return (
    
  <div className="search-bar m-2">
    <input
      placeholder="Search month..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />

    <SearchResults filteredMonth={filteredMonth} search={search} />
    <div className="api-msg mb-2">{msg}</div>
  </div>
  );
}

export default SearchBar;