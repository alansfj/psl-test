import { useMemo, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import MultipleChoiceQuiz from "./components/MultipleChoiceQuiz";
import Summary from "./components/Summary";
import { quizzes } from "./quizzes";

function App() {
  const [currentAppState, setCurrentAppState] = useState("menu");
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const numberOfQuestions = useMemo(() => {
    return quizzes.reduce((accu, quiz) => {
      quiz.questions.forEach(question => {
        accu++;
      });

      return accu;
    }, 0);
  }, []);

  return (
    <div className="App">
      {currentAppState === "menu" && (
        <Menu
          setCurrentAppState={setCurrentAppState}
          setCorrectAnswers={setCorrectAnswers}
        />
      )}
      {currentAppState === "quiz" && (
        <MultipleChoiceQuiz
          quizzes={quizzes}
          setCurrentAppState={setCurrentAppState}
          setCorrectAnswers={setCorrectAnswers}
        />
      )}
      {currentAppState === "summary" && (
        <Summary
          setCurrentAppState={setCurrentAppState}
          correctAnswers={correctAnswers}
          numberOfQuestions={numberOfQuestions}
          setCorrectAnswers={setCorrectAnswers}
        />
      )}
    </div>
  );
}

export default App;
