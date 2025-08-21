import React, {useState} from 'react';
import MainDisplay from "./MainDisplay.jsx";
import ButtonRow from "./ButtonRow.jsx";
import ColorButton from "./ColorButton.jsx";

function RushShow() {
    const [mainColor, setMainColor] = useState("transparent")
    return (
        <>
            <MainDisplay mainColor={mainColor} />
            {/*<ButtonRow changeColor={setMainColor()} />*/}
            <ColorButton color="red"  changeColor={setMainColor("red")} />
        </>
    );
}

export default RushShow;