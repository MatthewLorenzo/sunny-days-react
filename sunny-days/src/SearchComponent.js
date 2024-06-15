import search from "./search.svg";
import { useState } from "react";

export default function SearchComponent() {
  const [showSearch, setShowSearch] = useState(false);

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div
      className="search"
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      {showSearch && (
        <input
          type="search"
          placeholder="Search"
          className="search-bar"
          style={{
            marginTop: "5px",
            borderRadius: "8px",
            border: "none",
            outline: "none",
            height: "30px",
          }}
        />
      )}
      <img
        src={search}
        alt="search"
        onClick={toggleSearch}
        className="search-img"
        style={{ width: "40px", height: "40px" }}
      />
    </div>
  );
}
