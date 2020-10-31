import React from "react";
import Nav from "../nav/Nav";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <h1>U of M Coding Bootcamp Flashcards</h1>
      <Nav />
    </div>
  );
}

export default Header;
