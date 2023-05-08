import './App.css';
import React from "react";


function App() {


    const arr1 = "test"
    // const arr2 = 3
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let rot13 = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"

        return a.replace(/[a-z]/gi, c => rot13[alpha.indexOf(c)])
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
