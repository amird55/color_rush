import React, {useState} from 'react';

function MainDisplay(props) {
    const [mainColor, setMainColor] = useState("transparent")
    return (
        <div className="bigDiv" style={{backgroundColor:mainColor}}></div>
    );
}

export default MainDisplay;