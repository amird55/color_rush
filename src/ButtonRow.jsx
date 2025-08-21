import React from 'react';
import ColorButton from "./ColorButton.jsx";

function ButtonRow({changeColor}) {
    const setColor = (color) => {
        changeColor(color);
    }
    return (
        <div className="row6">
            <ColorButton color="red"   changeColor={setColor} />
            <ColorButton color="green" changeColor={setColor} />
        </div>
    );
}

export default ButtonRow;