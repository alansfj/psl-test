import React from "react";

const ChangeAppStateBtn = ({
  text,
  setCurrentAppState,
  newState,
  setCorrectAnswers,
}) => {
  return (
    <div>
      <button
        onClick={() => {
          setCurrentAppState(`${newState}`);
          setCorrectAnswers(0);
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default ChangeAppStateBtn;
