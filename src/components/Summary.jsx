import React from "react";
import { getMessage } from "../messages";

const Summary = () => {
  const message = getMessage();

  return (
    <div>
      <h1>Summary</h1>
      <div>{message}</div>
    </div>
  );
};

export default Summary;
