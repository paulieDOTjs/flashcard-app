import React, { useEffect, useState } from "react";
import Categories from "src/components/categories/Categories";
import "./HomePage.scss";

import data from "../../data/flashcards.json";
import { question } from "../../data/dataInterfaces";

import QuizBox from "src/components/quizBox/QuizBox";

function HomePage() {
  const [category, setCategory] = useState<string | undefined>("All");
  const [cards, setCards] = useState<question[] | undefined>(undefined);

  return (
    <div className="homePage">
      <div className="row">
        <div className="col-4 sidebar">
          <Categories data={data.data} setCategory={setCategory} />
        </div>
        <div className="col-8">
          <QuizBox category={category} cards={cards} />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
