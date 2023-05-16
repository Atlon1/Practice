import './App.css';
import React from "react";


function App() {


    const arr1 = "hello world"
    // const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return a.split('').map(elem => elem +" ").join('').split('').slice(0,-1).join('')

    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
