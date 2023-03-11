import './App.css';
import React from "react";


function App() {


    const arr1 = 26.95
    const arr2 = "Good"
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (a,b) => {
        if (b.toLowerCase() === "excellent"){
            return Math.ceil(a * 0.20)
        } else if (b.toLowerCase() === "great"){
            return Math.ceil(a * 0.15)
        } else if (b.toLowerCase() === "good"){
            return Math.ceil(a * 0.10)
        } else if (b.toLowerCase() === "poor"){
            return Math.ceil(a * 0.05)
        } else if (b.toLowerCase() === "terrible"){
            return Math.ceil(a)
        }else {
            return "Rating not recognised"
        }
    }


    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
