import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

import { pages } from "../../pages/routing";

function Nav() {
  return (
    <div className="Nav">
      {pages.map((page) => (
        <Link key={page.title + "Nav"} to={page.url}>
          {page.title}
        </Link>
      ))}
    </div>
  );
}

export default Nav;
