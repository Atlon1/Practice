import './App.css';
import React from "react";


function App() {


    const arr1 = 2
    const arr2 = 10
    const arr3 = 3
    // const arr4 = 1200
    // const arr5 = true


    const result = (a, b, c) => {
        return a
            .split(' ')
            .map(s => s[0])
            .join('')
            .replace(/i/ig, '1')
            .replace(/o/ig, '0')
            .replace(/s/ig, '5');
    }
    console.log(result(arr1, arr2, arr3))


    return (
        <>
        </>
    );
}

export default App;
