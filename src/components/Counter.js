import React, { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="container">
      <h2>And some more Here</h2>
      <button className="btn btn-3" onClick={handleDecrement}>
        Minus 1
      </button>
      <button className="btn btn-2" onClick={handleIncrement}>
        Add 1
      </button>
      <h3 className="counter">Count is {count}</h3>
      <button className="btn btn-3" onClick={() => setCount(0)}>
        Reset Counter
      </button>
    </div>
  );
};

export default Counter;
