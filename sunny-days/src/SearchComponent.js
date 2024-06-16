import search from "./search.svg";
import { useState } from "react";

export default function SearchComponent({ setInput }) {
  const [showSearch, setShowSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState("");

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleChange = (event) => {
    setInputSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(inputSearch);
  };

  return (
    <div
      className="search"
      style={{ display: "flex", justifyContent: "flex-end" }}
    >
      {showSearch && (
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Ex: New York, US"
            className="search-bar"
            onChange={handleChange}
            style={{
              marginTop: "5px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              height: "30px",
              width: "15vw",
              boxShadow: `-5px 5px 5px 0px rgba(0,0,0,0.5)`,
              // opacity: showSearch ? 1 : 0,
              // transform: showSearch ? "translateX(0)" : "translateX(100%)",
              // transition:
              //   "transform 2s ease-out, width 2s ease-out, opacity 0.7s ease-out",
            }}
          />
        </form>
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
