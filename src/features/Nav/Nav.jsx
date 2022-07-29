import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaPepperHot, FaRegSun } from "react-icons/fa";
import { GiSpaceShuttle } from "react-icons/gi";
import { MdDataExploration } from "react-icons/md";
import "./Nav.css";

function Nav() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6 d-flex justify-content-center py-1 mt-5 rounded colum">
          <Link className="color-white" to="best">
            <button type="button" className="btn buttons color-white mx-1">
              <GiSpaceShuttle /> Best
            </button>
          </Link>

          <Link className="color-white" to="hot">
            <button type="button" className="btn buttons color-white mx-1">
              <span className="text">
                <FaPepperHot /> Hot{" "}
              </span>
            </button>
          </Link>
          <Link className="color-white" to="new">
            <button type="button" className="btn buttons color-white mx-1">
              <FaRegSun /> New
            </button>
          </Link>
          <Link className="color-white" to="top">
            <button type="button" className="btn buttons color-white mx-1">
              <MdDataExploration /> Top
            </button>
          </Link>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
}

export default Nav;
