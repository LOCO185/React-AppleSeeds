import React from "react";
import "./styles.css";

class TextArea extends React.Component {
  constructor() {
    super();
    this.inputRef = React.createRef();
    this.state = { term: "" };
  }

  copyToClipboard = (text) => {
    navigator.clipboard.writeText(this.inputRef.current.value);
  };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <h1>Text Area</h1>
          <div className="field">
            <textarea
              onChange={(e) => this.setState({ term: e.target.value })}
              ref={this.inputRef}
              className="textarea"
              style={{ minHeight: 100, minWidth: 300 }}
              placeholder="Type Here..."
            />
          </div>
          <button
            className="btn btn-warning btn-lg"
            onClick={(this.copyToClipboard)}>
            Copy
          </button>
        </form>
      </div>
    );
  }
}
export default TextArea;
