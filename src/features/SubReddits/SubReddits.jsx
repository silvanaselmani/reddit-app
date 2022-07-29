import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectSubReddits, loadSubReddits } from "./SubRedditsSlice";

//CSS

import "bootstrap/dist/css/bootstrap.min.css";
import "./SubReddits.css";

const SubReddits = () => {
  const subReddits = useSelector(selectSubReddits);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSubReddits());
  }, [dispatch]);

  const onClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="btn-group btn-subreddit">
      <Link className="d-none d-md-inline" to="/popular">
        <button type="button" className="btn btn-orange" onClick={onClick}>
          Popular
        </button>
      </Link>

      <button
        type="button"
        className="btn dropdown-toggle dropdown-toggle-split btn-orange"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu py-0">
        {subReddits.map((subReddit) => {
          return (
            <Link
              className="dropdown-item  py-2"
              to={`/${subReddit.display_name}`}
              key={subReddit.id}
            >
              {subReddit.display_name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SubReddits;
