import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter(props) {
  const [count, setCount] = useState(0);
  const setIncrease = () => {
    setCount(count + 1);
  };
  const setDecrease = () => {
    setCount(count - 1);
  };
  const setReset = () => {
    setCount(0);
  };
  return (
    <div className="counter-div">
      <h1>Count: {count}</h1>
      <button className="btn" onClick={setIncrease}>
        Increase
      </button>
      <button className="btn" onClick={setDecrease}>
        Decrease
      </button>
      <button className="btn" onClick={setReset}>
        Reset
      </button>
    </div>
  );
}

export default App;
