import React from "react";
import "./styles.css";

class SearchBar extends React.Component {
  state = { term: "" };

  componentDidMount() {
    this.nameInput.focus();
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Search Input</label>
            <input
              ref={(input) => {
                this.nameInput = input;
              }}
              defaultValue={this.state.term}
              // autoFocus name="input"
              // type="text"
              // value=
              onChange={(e) => this.setState({ term: e.target.value })}
              placeholder="Search..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
