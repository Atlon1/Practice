import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 = [21,13,2,7,5,14,7,15,9,10]

    const arr3 = 4
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        return [2,9,14,7,15].every(x => a.includes(x)) ? "WIN" : "LOSE"
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
