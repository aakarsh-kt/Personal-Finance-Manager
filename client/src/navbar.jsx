import React from "react";
import { Outlet, Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="nav--cont">
      <div className="nav--heading">
        <h1>Humble</h1>
      </div>
      <div className="nav--list--cont">
        <ul className="nav--list">
          <li>
            <img src="src\assets\react.svg" />
          </li>
          <li>
            <img src="src\assets\react.svg" />
          </li>
          <li>
            <img src="src\assets\react.svg" />
          </li>
          <li>
            <img src="src\assets\react.svg" />
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
