import React from "react";

const ChangeAppStateBtn = ({ text, setCurrentAppState, newState }) => {
  return (
    <div>
      <button onClick={() => setCurrentAppState(`${newState}`)}>{text}</button>
    </div>
  );
};

export default ChangeAppStateBtn;
