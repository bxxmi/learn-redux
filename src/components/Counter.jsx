import React from "react";

const Counter = ({ number, onIncrease, onDecrease }) => {
  return (
    <div>
      {number}
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
};

export default Counter;
