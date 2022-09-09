import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { counterActions } from "../store/counter";
export default function Counter() {
  const { counter, showCounter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const handleIncrement = (amount) => {
    dispatch(counterActions.increment(amount));
  };
  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };
  const handleToggle = () => {
    dispatch(counterActions.toggle());
  };
  return (
    <div>
      <h2>Counter</h2>
      <p>Value : {showCounter && counter}</p>
      <button onClick={() => handleIncrement(1)}>Increment</button>
      <button onClick={() => handleIncrement(5)}>Increment+5</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={() => handleToggle()}>Toggle</button>
    </div>
  );
}
