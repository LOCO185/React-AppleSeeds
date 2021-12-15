import React from 'react';
import CheckBox from './CheckBox';

class CheckBoxes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      unchecked: false
    };
  }
  handleChecked = event =>
  this.setState({ checked: event.target.unchecked });

  handleUnChecked = event =>
  this.setState({ unchecked: event.target.checked });


  render() {
    return (
        <div>
        <label>
          <CheckBox
            unchecked={this.state.unchecked}
            onChange={this.handleUnChecked}
          />
          <span>I read the term of the app</span>
          <CheckBox
            unchecked={this.state.unchecked}
            onChange={this.handleUnChecked}
          />
          <span>I accept the term of the app</span>
          <CheckBox
            checked={this.state.checked}
            onChange={this.handleChecked}
          />
          <span>I want to get the weekly news letter</span>
          <CheckBox
            checked={this.state.checked}
            onChange={this.handleChecked}
          />
          <span>I want to get sales and offers</span>
        </label>
        </div>
    );
  };
}

export default CheckBoxes;
