import React from "react";
import { Link } from "react-router-dom";
import { FaPepperHot, FaRegSun } from "react-icons/fa";
//import { GiSpaceShuttle } from "react-icons/gi";
import { MdDataExploration } from "react-icons/md";
import { SkeletonTheme } from "react-loading-skeleton";
import "./Nav.css";

function Nav() {
  return (
    <SkeletonTheme>
      <div className="container mt-5">
        <div className="row">
          <div className="col d-flex justify-content-center py-1 rounded colum">
            <Link className="color-white mx-1 mx-lg-3" to="top">
              <button type="button" className="btn buttons color-white mx-1">
                <FaPepperHot className="pepper" /> Top
              </button>
            </Link>
            <Link className="color-white mx-1 mx-lg-3" to="new">
              <button type="button" className="btn buttons color-white mx-1">
                <FaRegSun className="sun" /> New
              </button>
            </Link>
            <Link className="color-white mx-1 mx-lg-3" to="rising">
              <button type="button" className="btn buttons color-white mx-1">
                <MdDataExploration className="top" /> Rising
              </button>
            </Link>
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
}

export default Nav;
