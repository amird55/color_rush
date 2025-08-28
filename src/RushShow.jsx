import React, {useState} from 'react';
import MainDisplay from "./MainDisplay.jsx";
import ButtonRow from "./ButtonRow.jsx";

function RushShow() {
    const [mainColor, setMainColor] = useState("transparent");
    const [clicks, setClicks] = useState({});
    const IwasClicked = (color) => {
        let cnt=clicks[color] || 0;
        cnt++;
        let newClicks = {...clicks,[color]:cnt};
        setClicks(newClicks);

        let bestColor = "";
        for(let clr in newClicks){
            if((bestColor==="")||(newClicks[clr]>newClicks[bestColor])){
                bestColor = clr;
            }
        }
        // const bestClr = newClicks.reduce((bst,val,clr) => {
        //     console.log("newClicks",bst,val,clr);
        //     return  clr ;
        // },"");
        console.log(bestColor);
        setMainColor(bestColor);
    }
    return (
        <>
            <MainDisplay mainColor={mainColor} />
            <ButtonRow changeColor={IwasClicked} />
        </>
    );
}

export default RushShow;