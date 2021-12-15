import React from "react";
import Button from "./Button";
import "./styles.css";

const colors = [
  { color: "blue", id: 0 },
  { color: "red", id: 1 },
  { color: "yellow", id: 2 },
  { color: "green", id: 3 }
];

const ChildToFather = () => {
  const [selectedColor, setSelectedColor] = React.useState("");

  const updateColor = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1>The color selected is : {selectedColor}</h1>
      {colors.map((Button) => {
        return (
          <Button
            callBack={updateColor}
            id={Button.id}
            key={Button.id}
            color={Button.color}
          />
        );
      })}
    </div>
  );
};

export default ChildToFather;