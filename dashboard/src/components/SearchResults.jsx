function SearchResults({ filteredMonth, search }) {
  return (
    <div className="search-results">
      {filteredMonth.map((month) => (
        <div
          key={month.id}
          className={`search-result${search ? ' search-result-show' : ''}`}
        >
          <p className="text-lg text-gray-300 p-2">
            {month.month} - Emails: {month.emails}, Opened: {month.opened}, Click Rate: {month.click_rate}%
          </p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
