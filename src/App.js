import './App.css';
import React from "react";


function App() {


    const arr1 = "<h2>Hello World</h2>"
    // const arr2 = 2
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return a.replace(/&/g, "&amp;")
            .replace(/"/g, "&quot;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
