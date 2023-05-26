import './App.css';
import React from "react";


function App() {


    const arr1 = "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"
    // const arr2 = 'BC'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        let res = a.replace(/\D/gi,' ').split(' ').map(val => Number(val)).reduce((a,b) => a + b)

        return res
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
