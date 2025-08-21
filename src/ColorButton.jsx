import React from 'react';

function ColorButton({color}) {
    return (
        <div className="roundButton" style={{backgroundColor:color}}></div>
    );
}

export default ColorButton;