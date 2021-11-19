import React from "react";
import { shuffleArray } from "../helpers/shuffleArray";
import "../sass/QuizAnswerOptions.styles.scss";

const QuizAnswerOptions = ({ correctAnswer, incorrectAnswers }) => {
  const allAnswerOptionsArra = incorrectAnswers.concat(correctAnswer);

  //   console.log("not shuffled", allAnswerOptionsArra);

  shuffleArray(allAnswerOptionsArra);

  //   console.log("shuffled", allAnswerOptionsArra);

  const handleClick = e => {
    // console.log(e.target);
  };

  return (
    <div className="answers-group">
      {allAnswerOptionsArra.map(option => (
        <div key={`${option}`} className="answer" onClick={handleClick}>
          {option}
        </div>
      ))}
    </div>
  );
};

export default QuizAnswerOptions;
