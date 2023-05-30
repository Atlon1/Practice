import './App.css';
import React from "react";


function App() {


    const arr1 = "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
    // const arr2 = 25
    // const arr3 = 0
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return a.replace(/Fire/gi, "~~")
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
