import React from "react";
import { shuffleArray } from "../helpers/shuffleArray";
import "../sass/QuizAnswerOptions.styles.scss";

const QuizAnswerOptions = ({
  correctAnswer,
  incorrectAnswers,
  setCorrectAnswers,
  didUserAnsweredAlready,
  setDidUserAnsweredAlready,
  userAnswered,
  memoizedUser,
  answersGroupRef,
}) => {
  const allAnswersArray = incorrectAnswers.concat(correctAnswer);

  shuffleArray(allAnswersArray);

  const handleClick = e => {
    if (
      e.target.textContent === correctAnswer &&
      didUserAnsweredAlready === false
    ) {
      e.target.classList.add("correct");
      setCorrectAnswers(prevState => prevState + 1);
    } else if (
      e.target.textContent !== correctAnswer &&
      didUserAnsweredAlready === false
    ) {
      e.target.classList.add("incorrect");

      const ansArr = document.querySelectorAll(".answer");

      ansArr.forEach(ans => {
        if (ans.textContent === correctAnswer) {
          ans.classList.add("correct");
        }
      });
    }

    setDidUserAnsweredAlready(true);
  };

  return (
    <div className="answers-group" ref={answersGroupRef}>
      {allAnswersArray.map(option => (
        <div key={`${option}`} className="answer" onClick={handleClick}>
          {option}
        </div>
      ))}
    </div>
  );
};

export default QuizAnswerOptions;
