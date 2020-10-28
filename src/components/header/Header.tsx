import React from "react";
import Nav from "../nav/Nav";
import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-8">
          <h1 className="heading">Flashcard</h1>
        </div>
        <div className="col-4">
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
