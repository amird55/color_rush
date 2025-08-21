import React from 'react';

function ColorButton({color,changeColor}) {
    const handleClick = () => {
        changeColor(color);
    }
    return (
        <div className="roundButton" style={{backgroundColor:color}} onClick={handleClick}></div>
    );
}

export default ColorButton;