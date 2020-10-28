import React from "react";
import Nav from "../nav/Nav";

function Header() {
  return (
    <div className="Header">
      <div className="row">
        <div className="col-6">Flashcard</div>
        <div className="col-6">
          <Nav />
        </div>
      </div>
    </div>
  );
}

export default Header;
