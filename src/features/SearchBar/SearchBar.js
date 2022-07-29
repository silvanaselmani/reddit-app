import React from "react";

//CSS
import "./SearchBar.css";

function SearchBar() {
  return (
    <form className="form-inline my-2 ">
      <input
        className="form-control w-50 "
        type="search"
        placeholder="🔍 Search something interesting..."
        aria-label="Search something interesting.."
      />
    </form>
  );
}

export default SearchBar;
