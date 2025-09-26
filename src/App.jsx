// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
// import SolScoreboard from './solFormChallenge'
import Arraypush from "./arrayPush";
import ShoppingCart from "./arrayProblem";
import { useState } from "react";
import RequestTracker from "./PendingProblem";

function App() {
  // const [count, setCount] = useState(0);

  // function handleIncClick() {
  //   setCount((c)=>{
  //     return c+1
  //   });
  //   setCount((c)=>{
  //     return c+3
  //   });
  // }
  return (
    <>
      {/* <h1>the count is : {count}</h1>
      <button onClick={handleIncClick}>inc count </button> */}
      <RequestTracker />
    </>
  );
}

export default App;
