import './App.css';
import React from "react";


function App() {


    const arr1 = " glasses of wine and 2 shot"
    // const arr2 = 25
    // const arr3 = 0
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        let res = a.replace(/\D/g, ' ').split(' ').map(val => Number(val)).reduce((a,b) => a+b)
        return res <= 1 ? `${res} glass of water` : `${res} glasses of water`

    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
