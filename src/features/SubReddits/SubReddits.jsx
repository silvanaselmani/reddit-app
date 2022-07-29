import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  selectSubReddits,
  selectIsLoading,
  // selectHasError,
  loadSubReddits,
} from "./SubRedditsSlice";

//CSS
import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SubReddits.css";

const SubReddits = () => {
  const subReddits = useSelector(selectSubReddits);
  const isLoading = useSelector(selectIsLoading);
  // const hasError = useSelector(selectHasError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadSubReddits());
  }, [dispatch]);

  return (
    <div className="btn-group pl-5 ">
      <Link className="" to="/popular">
        <button type="button" className="btn color-white btn-orange">
          {isLoading ? (
            <Spinner color="white" type="grow" size="sm" />
          ) : (
            "SubReddits"
          )}
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
