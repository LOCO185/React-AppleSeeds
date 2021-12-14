import React from "react";
import ReactDOM from "react-dom";
import Color from "./8.1/Color";

const App = () => {
    return (
      <div>
          <Color />
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.querySelector("#root"));