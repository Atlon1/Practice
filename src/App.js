import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 = "10000000101101111110011001000"

    const arr3 = 4
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
       return a.split("").map((elem) => elem === "0" ? "1" : "0").join('')
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
