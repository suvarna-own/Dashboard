import { useEffect, useState } from "react";
import SearchResults from "./SearchResults";    

function UserSearch() {
  const [months, setMonths] = useState([]);
  const [search, setSearch] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:8000/analytics")
      .then((res) => res.json())
      .then((data) => {
        setMonths(data);
        // set a simple message showing how many records were fetched
        // if (Array.isArray(data)) setMsg(`Loaded ${data.length} records`);
        // else setMsg("Loaded data from API");
      })
      .catch(() => setMsg("Failed to load data"));
  }, []);

  const filteredMonth = months.filter((month) =>
    month.month.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="user-search m-2">
      
      <input
        placeholder="Search month..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <SearchResults filteredMonth={filteredMonth} search={search} />
      <div className="api-msg" style={{ marginBottom: 8 }}>{msg}</div>
    </div>
  );
}

export default UserSearch;