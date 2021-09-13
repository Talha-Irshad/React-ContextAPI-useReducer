import "./styles.css";
import Parent from "./Parent";
import counterContext from "./counterContext";
import React, { useState } from "react";

export default function App() {
  var countState = useState(0);
  return (
    <counterContext.Provider value={countState}>
      <div className="App">
        <Parent />
      </div>
    </counterContext.Provider>
  );
}
