import './App.css';
import React from "react";


function App() {


    const arr1 = "Example Input"
    // const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        if (a >= b) return "INVALID";

        var sum = 0;
        for (var i = a; i < b; i+=a) {
            sum += i;
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
