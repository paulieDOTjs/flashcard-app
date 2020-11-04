import React, { MouseEvent, useEffect, useState } from "react";
import "./QuizBox.scss";
import { question } from "../../data/dataInterfaces";
import { parseCodeQ } from "../../helperFuncs/reactComponentParsing";

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

  function handlePre(event: MouseEvent) {
    event.preventDefault();
    if (currQ > 0) setCurrQ(currQ - 1);
    setShowAns(false);
  }

  useEffect(() => {
    setCurrQ(0);
    setShowAns(false);
  }, [props]);

  return (
    <div className="QuizBox">
      <h2>{props.category}</h2>
      {props.cards !== undefined && props.cards.length > currQ ? (
        <button id="revealBtn" className="quizBtn" onClick={handleReveal}>
          Reveal
        </button>
      ) : (
        <div></div>
      )}
      <div className="card">
        {props.cards !== undefined ? (
          props.cards.length <= currQ ? (
            "That's all! You did all the questions in this category. Choose a new category to keep going."
          ) : showAns === false ? (
            <>
              <b>{"Question: "} </b> {parseCodeQ(props.cards[currQ].question)}
            </>
          ) : (
            <>
              <b>{"Answer: "} </b> {parseCodeQ(props.cards[currQ].answer)}
            </>
          )
        ) : (
          ""
        )}
      </div>
      {props.cards !== undefined && props.cards.length > currQ ? (
        <form>
          <button className="quizBtn" onClick={handlePre}>
            Previous
          </button>
          <button className="quizBtn" onClick={handleNext}>
            Next
          </button>
        </form>
      ) : (
        <div> </div>
      )}
    </div>
  );
}

export default QuizBox;
