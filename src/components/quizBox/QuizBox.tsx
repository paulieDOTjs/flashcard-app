import React from "react";
import "./QuizBox.scss";
import { question } from "../../data/dataInterfaces";

type quizBoxProps = {
  category: string;
  cards: question[];
};

function QuizBox(props: any) {
  return (
    <div className="QuizBox">
      <h2>{props.category}</h2>
      <div>hello</div>
    </div>
  );
}

export default QuizBox;
