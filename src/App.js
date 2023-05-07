import './App.css';
import React from "react";


function App() {


    const arr1 = 6
    // const arr2 = 3
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        let sum = 0;
        for(let i = 1; i <= a; i++)
        {
            sum += (i*(i+1))/2;
        }
        return sum;

    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
