import './App.css';
import React from "react";


function App() {


    const arr1 = [41, 75, 72, 56, 80, 82, 81, 33]
    const arr2 = 50
    // const arr3 = 70
    // const arr4 = 8
    // const arr5 = true


    const result = (a, b) => {
        let res = a.reduce((ele, ind) => {
            return (ele + ind)
        })
        res = res / a.length

        if (b > res) {
            return true
        } else {
            return false
        }
    }


    console.log(result(arr1, arr2))


    return (
        <>
        </>
    );
}

export default App;
