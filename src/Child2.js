import React, { useReducer } from "react";
import counterReducer from "./counterReducer";

const Child2 = () => {
  let [state, dispatch] = useReducer(counterReducer, 0);
  return (
    <div>
      <h3>This is a child component which uses reducer</h3>
      <h3>Reducer Count:{state}</h3>
      <button
        onClick={() => {
          dispatch("INCREMENT");
        }}
      >
        Inc using Reducer
      </button>
    </div>
  );
};

export default Child2;
