import './App.css';
import React from "react";


function App() {


    const arr1 = "Mexico"
    // const arr2 = [1, 2, 5]
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        if (a.length <= 2 || a.length === 0) {
            return [`${a}`]
        } else {
            return [`${a}`, `${a.slice(0,2)}`]
        }

    }

    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
