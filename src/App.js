import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const nayoks = ["john", "kom", "mon", "thom", "tom"];

  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}
function Counter(props) {
  const [count, setCount] = useState(0);
  const setIncrease = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  const setDecrease = () => {
    const newCount = count - 1;
    setCount(newCount);
  };
  const setReset = () => {
    const newCount = 0;
    setCount(newCount);
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
