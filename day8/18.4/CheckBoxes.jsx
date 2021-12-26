import React, { useState } from "react";

export default function MarkAndDelete() {
  const baseBoxes = ["one", "two", "three", "four", "five"];

  const [CheckBoxes, setCheckBoxes] = useState(
    baseBoxes.map((box) => {
      return { name: box, checked: false };
    })
  );

  const reset = () => {
    setCheckBoxes(
      baseBoxes.map((box) => {
        return { name: box, checked: false };
      })
    );
  };

  const deleteBoxes = () => {
    const newCheckBoxes = [...CheckBoxes].filter((box) => {
      return box.checked === false;
    });
    setCheckBoxes(newCheckBoxes);
  };

  const changeHandler = (e, i) => {
    const newBoxes = [...CheckBoxes];
    CheckBoxes[i].checked = e.target.checked;
    setCheckBoxes(newBoxes);
  };

  return (
    <div>
      <button onClick={deleteBoxes}>Delete</button>
      <button onClick={reset}>Reset</button>
      <ul>
        {CheckBoxes.map((item, i) => {
          return (
            <li key={item.name}>
              <label htmlFor={item.name}>{item.name}</label>
              <input
                checked={item.checked}
                onChange={(e) => changeHandler(e, i)}
                type="checkbox"
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
