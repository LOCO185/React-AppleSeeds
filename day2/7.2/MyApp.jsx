import "./style.css";
import React, { useState } from "react";

export default function MyApp2() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="MyApp2">
      <button onClick={() => setIsVisible(!isVisible)}>CLICK!</button>
      {isVisible && <h1>Hello CodeSandbox</h1>}
    </div>
  );
}