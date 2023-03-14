import './App.css';
import React from "react";


function App() {


    const arr1 = [-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26]
    const arr2 = 2
    // const arr3 = 70
    // const arr4 = 8
    // const arr5 = true


    const result = (a, b) => {
        return a.filter((e) => e % 2 === 0).slice(-b)
    }


    console.log(result(arr1, arr2))


    return (
        <>
        </>
    );
}

export default App;
