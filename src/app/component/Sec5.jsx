"use client";

import { useState } from "react";

export default function() {
  const [move, setMove] = useState(0);

  function handleKeyDown(e) {
    if (e.key === "ArrowRight") {
      let number = move + 5;
      setMove(number);
    } else if (e.key === "ArrowLeft") {
      let number = move - 5;
      setMove(number);
    }
  }

  return (
    <div>
      <h1>Race</h1>
      <p>
        Move car to the right by clicking on the car & pressing the right arrow
      </p>
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="car"
        style={{ marginLeft: `${move}px` }}
      >
        🏎
      </div>
    </div>
  );
}

/*style={{ marginLeft: race }}*/
