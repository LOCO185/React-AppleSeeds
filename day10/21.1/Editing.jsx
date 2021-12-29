import React from "react";
import { useEffect, useState, useRef } from "react";

const Editing = () => {
  const [term, setTerm] = useState(false);
  const inputRef = useRef();

  const displayChanges = () => {
    return (
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={changeStatus}>Save</button>
      </div>
    );
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  const changeStatus = () => {
    setTerm(!term);
  };

  return (
    <div>
      <button onClick={changeStatus}>Edit</button>
      <div>{term && displayChanges()}</div>
    </div>
  );
};

export default Editing;
