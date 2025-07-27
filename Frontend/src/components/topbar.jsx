import React, { useState } from "react";
import "./css/topbar.css";

function TopBar({ onSearch, onToggleFilter }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="topbar">
      <div className="spacer" />

      <div className="topbar-center">
        <input
          type="text"
          className="search-input"
          placeholder="Search cars..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn" onClick={handleSearch}>Search</button>
        <button className="btn" onClick={onToggleFilter}>Filter</button>
      </div>

      <div className="topbar-profile">
        <img src="/images/profile.png" alt="Profile" className="profile-img" />
      </div>
    </div>
  );
}
export default TopBar;
