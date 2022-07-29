import React from "react";
import { Link } from "react-router-dom";

//Components
import SearchBar from "../SearchBar/SearchBar";
import SubReddits from "../SubReddits/SubReddits";

//CSS
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="navbar justify-content-around bg-primary p-0 fixed-top">
      <div className="col-4 d-flex align-items-center">
        <Link
          className="navbar-brand mx-3 d-inline-flex align-items-center"
          to="/popular"
        >
          <img
            src="https://cdn.worldvectorlogo.com/logos/reddit-4.svg"
            width="50"
            height="50"
            className=""
            alt="logo"
          />
          <span className="px-2 text-white d-none d-md-inline font-weight-bold reddit">
            Redd<span className="i">i</span>t
          </span>
        </Link>
        <SubReddits />
      </div>
      <div className="col-8">
        <SearchBar className="row" />
      </div>
    </nav>
  );
};
