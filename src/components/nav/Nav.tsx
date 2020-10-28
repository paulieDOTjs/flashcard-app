import React from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

import { pages } from "../../pages/routing";

function Nav() {
  return (
    <div className="Nav">
      <ul>
        {pages.map((page) => (
          <li>
            <Link key={page.title} to={page.url}>
              {page.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Nav;
