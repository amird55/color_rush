import React from 'react';
import ColorButton from "./ColorButton.jsx";

function ButtonRow({changeColor}) {
    const setColor = (color) => {
        return () => {
            changeColor(color)
        }
    }
    const setRed = () => {
        return () => {
            changeColor("red")
        }
    }
    const setGreen = () => {
        return () => {
            changeColor("green")
        }
    }
    return (
        <>
            <ColorButton color="red"  changeColor={setRed} />
            <ColorButton color="green" changeColor={setGreen} />
        </>
    );
}

export default ButtonRow;