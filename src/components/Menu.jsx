import React from "react";
import ChangeAppStateBtn from "./ChangeAppStateBtn";
import "../sass/Menu.styles.scss";

const Menu = ({ setCurrentAppState, setCorrectAnswers }) => {
  return (
    <div className="menu-container">
      <h1 className="welcome-text">Welcome to the awesome Quiz!</h1>
      <ChangeAppStateBtn
        text="Start Quiz"
        setCurrentAppState={setCurrentAppState}
        newState="quiz"
        setCorrectAnswers={setCorrectAnswers}
      />
    </div>
  );
};

export default Menu;
