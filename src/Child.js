import React, { useContext } from "react";
import counterContext from "./counterContext";
const Child = () => {
  var count = useContext(counterContext);
  return (
    <div>
      <h2>This is a child component</h2>
      <h3>Count: {count[0]}</h3>
      <button
        onClick={() => {
          count[1](++count[0]);
        }}
      >
        Increment
      </button>
    </div>
  );
};
export default Child;
