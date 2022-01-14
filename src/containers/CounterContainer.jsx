import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch } from "react-redux";
// import { decrease, increase } from "../redux/reducers/counter";
import { increaseAsync, decreaseAsync } from "../redux/reducers/counter";

const CounterContainer = () => {
  const number = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrease = () => dispatch(increaseAsync());
  const handleDecrease = () => dispatch(decreaseAsync());

  return (
    <Counter
      number={number}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
    />
  );
};

export default CounterContainer;
