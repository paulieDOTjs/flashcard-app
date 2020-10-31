import React, { MouseEvent, useEffect, useState } from "react";
import "./QuizBox.scss";
import { question } from "../../data/dataInterfaces";

type quizBoxProps = {
  category: string | undefined;
  cards: question[] | undefined;
};

function QuizBox(props: quizBoxProps) {
  const [currQ, setCurrQ] = useState(0);
  const [showAns, setShowAns] = useState(false);

  function handleReveal(event: MouseEvent) {
    event.preventDefault();
    setShowAns(!showAns);
  }

  function handleNext(event: MouseEvent) {
    event.preventDefault();
    setCurrQ(currQ + 1);
    setShowAns(false);
  }

  useEffect(() => {
    setCurrQ(0);
  }, [props]);

  return (
    <div className="QuizBox">
      <h2>{props.category}</h2>
      <div className="card">
        {props.cards !== undefined
          ? props.cards.length <= currQ
            ? "That's all! You did all the questions in this category. Choose a new category to keep going."
            : showAns === false
            ? "Question: " + props.cards[currQ].question
            : "Answer: " + props.cards[currQ].answer
          : ""}
      </div>
      {props.cards !== undefined && props.cards.length > currQ ? (
        <form>
          <button onClick={handleReveal}>Reveal</button>
          <button onClick={handleNext}>Next</button>
        </form>
      ) : (
        <div> </div>
      )}
    </div>
  );
}

export default QuizBox;
