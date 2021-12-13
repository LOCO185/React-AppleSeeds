import React from "react";
import './style.css';
const Button1 = (props) => {
    return (

            <button className={props.className}>
                {props.name}
            </button>

    );
};

export default Button1;