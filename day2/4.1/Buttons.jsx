import React from "react";
import Button1 from "./Button1";

const Buttons = () => {
    return (
        <div>
            <Button1 name='Important' className='bold'/>
            <Button1 name='Not Important' className='normal'/>
        </div>

    );
};

export default Buttons;