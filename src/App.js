import './App.css';
import React from "react";


function App() {


    const arr1 = "CodeWars"
    // const arr2 = 3
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        const even = a.split('').filter((v,i) => i % 2 === 0).join('')
        const odd = a.split('').filter((v,i) => i % 2 !== 0).join('')


        return `${even} ${odd}`
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
