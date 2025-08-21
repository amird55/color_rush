import React from 'react';
import ColorButton from "./ColorButton.jsx";

function ButtonRow(props) {
    return (
        <>
            <ColorButton color="red" />
            <ColorButton color="green" />
        </>
    );
}

export default ButtonRow;