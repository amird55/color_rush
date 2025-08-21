import React from 'react';

function ColorButton({color,changeColor}) {
    return (
        <div className="roundButton" style={{backgroundColor:color}} onClick={changeColor}></div>
    );
}

export default ColorButton;