import { useState } from "react";
import "./App.css";
import ChangeAppStateBtn from "./components/ChangeAppStateBtn";
import Menu from "./components/Menu";
import MultipleChoiceQuiz from "./components/MultipleChoiceQuiz";
import Summary from "./components/Summary";
import { quizzes } from "./quizzes";

function App() {
  const [currentAppState, setCurrentAppState] = useState("menu");

  return (
    <div className="App">
      {currentAppState === "menu" && <Menu />}
      {currentAppState === "quiz" && (
        <MultipleChoiceQuiz
          quizzes={quizzes}
          setCurrentAppState={setCurrentAppState}
        />
      )}
      {currentAppState === "summary" && <Summary />}

      {currentAppState === "menu" && (
        <ChangeAppStateBtn
          text="Start Quiz"
          setCurrentAppState={setCurrentAppState}
          newState="quiz"
        />
      )}

      {currentAppState === "summary" && (
        <ChangeAppStateBtn
          text="Return"
          setCurrentAppState={setCurrentAppState}
          newState="menu"
        />
      )}
    </div>
  );
}

export default App;
