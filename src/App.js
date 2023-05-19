import './App.css';
import React from "react";


function App() {


    const arr1 = "LEET"
    const arr2 = 'value'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {

        let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let leetSeak = "@8(D3F6#!JK1MN0PQR$7UVWXY2"

        return a.replace(/[A-Z]/gi, c => leetSeak[alpha.indexOf(c)])
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
