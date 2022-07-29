import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

//CSS

import "./SearchBar.css";
import {
  clearSearchTerm,
  selectSearchTerm,
  setSearchTerm,
} from "./SearchBarSlice";
import { useHistory } from "react-router-dom";

function SearchBar() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const history = useHistory();

  const onSearchChangeHandler = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(e.target.value));
  };

  const onSearchTermClearHandler = (e) => {
    if (e.key === "Enter") {
      history.push(`=${searchTerm}`);
      dispatch(clearSearchTerm());
    }
  };

  return (
    <form className="form-inline my-2 search ">
      <input
        value={searchTerm}
        onChange={onSearchChangeHandler}
        onKeyPress={onSearchTermClearHandler}
        className="form-control search"
        placeholder="🔍 Search something interesting..."
        aria-label="Search something interesting.."
      />
    </form>
  );
}

export default SearchBar;
