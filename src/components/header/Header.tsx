import React from "react";
import Nav from "../nav/Nav";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="row">
        <div className="col-8">
          <h1 className="heading">U of M Coding Bootcamp Flashcards</h1>
        </div>
        <div className="col-4">
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
