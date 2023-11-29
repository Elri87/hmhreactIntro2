"use client";

import { useState } from "react";

export default function Sec3() {
  const [words, setWords] = useState("");

  function handleChange(e) {
    // e.preventDefault();

    setWords(e.target.value);
  }

  return (
    <div>
      <h1>Mirror</h1>
      <form>
        <input type="text" onChange={handleChange} value={words} />
      </form>
      <p>{words}</p>
    </div>
  );
}
