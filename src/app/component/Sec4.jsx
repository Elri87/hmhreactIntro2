"use client";

import { useState } from "react";

export default function Sec4() {
  const [number, setNumber] = useState(0);

  function handelPlus() {
    let plus = number + 1;
    setNumber(plus);
  }

  function handleMinus() {
    let minus = number - 1;
    setNumber(minus);
  }

  return (
    <div>
      <h1>Counter</h1>
      <div>
        <button onClick={handleMinus}>-</button>
        <span className="num">{number}</span>
        <button onClick={handelPlus}>+</button>
      </div>
    </div>
  );
}
