import './App.css';
import React from "react";


function App() {



    const arr1 = "My name is John"
    const arr2 = "-"
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true



    const result = (a,b) => {
        const res = a.split(' ').map((elem) => {
            return elem.split('').join(b)}).join(' ')
        return res
    }

    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
