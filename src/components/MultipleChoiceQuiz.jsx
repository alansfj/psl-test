import React, { useCallback, useMemo, useRef, useState } from "react";
import ChangeQuestionBtn from "./ChangeQuestionBtn";
import QuizAnswerOptions from "./QuizAnswerOptions";
import QuizQuestionText from "./QuizQuestionText";
import QuizTitle from "./QuizTitle";

const MultipleChoiceQuiz = ({
  quizzes,
  setCurrentAppState,
  setCorrectAnswers,
}) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const [didUserAnsweredAlready, setDidUserAnsweredAlready] = useState(false);

  const answersGroupRef = useRef();

  const userAnswered = useCallback(() => {
    setDidUserAnsweredAlready(true);
  }, []);

  const memoizedUser = useMemo(() => didUserAnsweredAlready, []);

  const { title, questions } = quizzes[currentQuizIndex];

  const maxQuizIndex = quizzes.length - 1;
  const maxQuestionIndex = questions.length - 1;

  return (
    <div>
      <QuizTitle title={title} />
      <QuizQuestionText text={questions[currentQuestionIndex].text} />
      <QuizAnswerOptions
        correctAnswer={questions[currentQuestionIndex].correctAnswer}
        incorrectAnswers={questions[currentQuestionIndex].incorrectAnswers}
        setCorrectAnswers={setCorrectAnswers}
        didUserAnsweredAlready={didUserAnsweredAlready}
        setDidUserAnsweredAlready={setDidUserAnsweredAlready}
        userAnswered={userAnswered}
        memoizedUser={memoizedUser}
        answersGroupRef={answersGroupRef}
      />

      {didUserAnsweredAlready && (
        <ChangeQuestionBtn
          currentQuestionIndex={currentQuestionIndex}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
          maxQuestionIndex={maxQuestionIndex}
          currentQuizIndex={currentQuizIndex}
          setCurrentQuizIndex={setCurrentQuizIndex}
          maxQuizIndex={maxQuizIndex}
          setCurrentAppState={setCurrentAppState}
          setDidUserAnsweredAlready={setDidUserAnsweredAlready}
          answersGroupRef={answersGroupRef}
        />
      )}
    </div>
  );
};

export default MultipleChoiceQuiz;
