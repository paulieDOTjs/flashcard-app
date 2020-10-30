import React from "react";
import Categories from "src/components/categories/Categories";
import "./HomePage.scss";

function HomePage() {
  return (
    <div className="homePage">
      <div className="row">
        <div className="col-4 sidebar">
          <Categories />
        </div>
        <div className="col-8">flashcardhere</div>
      </div>
    </div>
  );
}

export default HomePage;
