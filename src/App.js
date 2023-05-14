import './App.css';
import React from "react";


function App() {


    const arr1 = "Example Input"
    // const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return a
            .split(' ')
            .reverse()
            .join(' ')
            .split('')
            .map(v => v == v.toUpperCase() ?
                v.toLowerCase() :
                v.toUpperCase())
            .join('');
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
