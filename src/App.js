import './App.css';
import React from "react";


function App() {


    const arr1 = ["John", "Smith"]
    const arr2 = 'Phoenix'
    const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (name, city, state) => {
        const res = name.reduce((elem, inde) => elem + " " + inde)
        return `Hello, ${res}! Welcome to ${city}, ${state}!`
    }


    console.log(result(arr1, arr2, arr3))


    return (
        <>
        </>
    );
}

export default App;
