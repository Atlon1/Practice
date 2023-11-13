import './App.css';
import React, {useEffect, useState} from "react";

function App() {

    const number = 3.1415926535
    const precision = 4

    const res = (num, b) => {
       return Math.round(num * Math.pow(10, b)) / Math.pow(10, b)
    }


    console.log(res(number, precision))

    return (
        <>

        </>

    );
}

export default App;