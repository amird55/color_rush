import React, {useState} from 'react';
import MainDisplay from "./MainDisplay.jsx";
import ButtonRow from "./ButtonRow.jsx";

function RushShow() {
    const [mainColor, setMainColor] = useState("transparent")
    return (
        <>
            <MainDisplay mainColor={mainColor} />
            <ButtonRow changeColor={setMainColor} />
        </>
    );
}

export default RushShow;