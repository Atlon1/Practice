import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 =9007199254740990
    // const arr3 = 2
    // const arr4 = "l"
    // const arr5 = 5000




    const result = (a) => {
        return Number.isSafeInteger(a)

    }

    console.log(result(arr2))


    return (
       <>
       </>
    );
}

export default App;
