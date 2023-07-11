import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 =10

    const arr3 = 10
    const arr4 = 21
    // const arr5 = 5000




    const result = (a,b,c) => {

        if (c > 2 * b) return "Too much clothes";
        if (c < b) return "Not enough clothes";
        const res = +(a * 1.1 ** (c - b)).toFixed(2)


        return res

    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
