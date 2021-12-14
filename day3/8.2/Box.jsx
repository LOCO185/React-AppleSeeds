import React from "react";
import "./style.css";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animationClass: ""
    };
  }
  componentDidMount = () => {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({
        animationClass: "Box-show"
      });
    }, 1000);
  };

  render = () => {
    return (
      <div
        className={`${this.state.animationClass}`}
        style={{
          width: this.props.size,
          height: this.props.size,
          background: "lightblue",
          marginBottom: "10px"
        }}
      ></div>
    );
  };
}
export default Box;
