import React from "react";
import { getMessage } from "../messages";
import ChangeAppStateBtn from "./ChangeAppStateBtn";

const Summary = ({
  setCurrentAppState,
  correctAnswers,
  numberOfQuestions,
  setCorrectAnswers,
}) => {
  const message = getMessage();

  return (
    <div>
      <h1>Summary</h1>
      <div>{`You got ${correctAnswers} of ${numberOfQuestions} right.`}</div>
      <div>{message}</div>
      <ChangeAppStateBtn
        text="Return"
        setCurrentAppState={setCurrentAppState}
        newState="menu"
        setCorrectAnswers={setCorrectAnswers}
      />
    </div>
  );
};

export default Summary;
