"use client";
import { useState } from "react";

export default function Sec2() {
  const [isBlue, setIsBlue] = useState(false);

  //const [boxColor, setBoxColor] = useState("white-box");

  function handleClick(e) {
    isBlue ? setIsBlue(false) : setIsBlue(true);
    /*if (boxColor === "white-box") {
      setBoxColor("blue-box");
    } else {
      setBoxColor("white-box");
    }*/
  }

  return (
    <div>
      <h1>Toggle the Box</h1>
      <div
        onClick={handleClick}
        className={isBlue ? "blue-box" : "white-box"}
      ></div>
    </div>
  );
}

//className={boxColor === "white-box" ? "white-box" : "blue-box"}
