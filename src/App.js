import './App.css';
import React from "react";


function App() {


    const arr1 = "How can mirrors be real if our eyes aren't real"
    // const arr2 = [1, 3]
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return a.split(' ').map((elem) => {
           elem.split('')
           return  elem[0].toUpperCase() + elem.slice(1)
        }).join(' ')
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
