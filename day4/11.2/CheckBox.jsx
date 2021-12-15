import React from 'react';

const CheckBox = (props) => {
  return (
    <div style={{display: 'block'}}>
    <input type="checkbox" {...props}></input>
    </div>
  );
}

export default CheckBox;
