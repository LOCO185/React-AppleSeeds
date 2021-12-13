import React from "react";

const Ex22 = () => {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!";
  return (
    <div>
      <p>
        {data[0]} {data[1]}
      </p>
      <p>
        {number1} + {number2} = {number1 + number2}
      </p>
      <p>your string length is: {string.length}</p>
    </div>
  );
};

export default Ex22;
