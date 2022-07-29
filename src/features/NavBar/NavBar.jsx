import React from "react";
import { Link } from "react-router-dom";

//Components
import SearchBar from "../SearchBar/SearchBar";
import SubReddits from "../SubReddits/SubReddits";

//CSS
import "./NavBar.css";

export const NavBar = () => {
  const onClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <nav className="navbar nav-bar p-0 fixed-top">
      <div className="col-2 d-flex align-items-center">
        <Link
          className="navbar-brand mx-3 d-inline-flex align-items-center"
          to="/popular"
          onClick={onClick}
        >
          <img
            src="https://cdn.worldvectorlogo.com/logos/reddit-4.svg"
            width="50"
            height="50"
            className="logo"
            alt="logo"
          />
          <span className="px-2 text-white d-none d-md-inline font-weight-bold reddit">
            Redd<span className="i">i</span>t
          </span>
        </Link>
      </div>
      <div className="col-8 d-flex justify-content-end justify-content-lg-center ">
        <SearchBar />
      </div>
      <div className="col-2 d-flex justify-content-start justify-content-sm-end  justify-content-md-center">
        <SubReddits />
      </div>
    </nav>
  );
};
