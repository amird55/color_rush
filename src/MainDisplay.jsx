import React from 'react';

function MainDisplay({mainColor}) {
    return (
        <div className="bigDiv" style={{backgroundColor:mainColor}}></div>
    );
}

export default MainDisplay;