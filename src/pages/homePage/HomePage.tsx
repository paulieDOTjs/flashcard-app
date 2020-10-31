import React, { useEffect, useState } from "react";
import find from "lodash/find";

import Categories from "src/components/categories/Categories";
import "./HomePage.scss";

import data from "../../data/flashcards.json";
import { question } from "../../data/dataInterfaces";

import QuizBox from "src/components/quizBox/QuizBox";

function HomePage() {
  const [category, setCategory] = useState<string | undefined>(
    "Pick a category"
  );
  const [cards, setCards] = useState<question[] | undefined>(undefined);

  useEffect(() => {
    if (category) {
      const categ = find(data.data, function (obj) {
        return obj.name === category;
      });
      if (categ !== undefined && categ.cards !== undefined) {
        setCards(categ.cards.sort(() => Math.random() - 0.5));
      }
    }
  }, [category]);

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
