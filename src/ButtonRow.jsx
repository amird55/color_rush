import React from 'react';
import ColorButton from "./ColorButton.jsx";

function ButtonRow({changeColor}) {
    const setColor = (color) => {
        changeColor(color);
    }
    const colors = ["red","green","blue","yellow","orange","purple","pink"];
    return (
        <div className="row6">
            {colors.map((color) => {
                return <ColorButton key={color} color={color} changeColor={setColor} />
            })}
        </div>
    );
}

export default ButtonRow;