import React from "react";

const ChangeQuestionBtn = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  maxQuestionIndex,
  currentQuizIndex,
  setCurrentQuizIndex,
  maxQuizIndex,
  setCurrentAppState,
  setDidUserAnsweredAlready,
  answersGroupRef,
}) => {
  const handleNext = () => {
    if (currentQuestionIndex < maxQuestionIndex) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      if (currentQuizIndex < maxQuizIndex) {
        setCurrentQuizIndex(currentQuizIndex + 1);
        setCurrentQuestionIndex(0);
      } else {
        setCurrentAppState("summary");
        setCurrentQuizIndex(0);
        setCurrentQuestionIndex(0);
      }
    }

    setDidUserAnsweredAlready(false);
  };

  return (
    <div>
      <button onClick={handleNext}>Next Question</button>
    </div>
  );
};

export default ChangeQuestionBtn;
