import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = "apple ban"
    // const arr2 = 3


    const result = (a) => {
        const res = a.split(' ')
        return res.map((a) => {
            return a +" "+a.length
        })
    }

    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
