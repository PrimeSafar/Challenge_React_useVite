import React from "react";
import { useContext } from "react";
import MyContext from "./loanFormContext";

function Child() {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <p>Received from Context: <strong>{contextValue}</strong></p>
    </div>
  );
}

export default Child;
