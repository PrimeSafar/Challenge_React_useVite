import React from "react";
import MyContext from "./loanFormContext";
import Parent from "./Parent";

function App() {
  const message = "Hello from Context new file !";

  return (
    <MyContext.Provider value={message}>
      <div>
        <h1>useContext from Scratch</h1>
        <Parent />
      </div>
    </MyContext.Provider>
  );
}

export default App;
