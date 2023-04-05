import './App.css';
import React from "react";


function App() {


    const arr1 = ["Germany", "Ukraine"]
    const arr2 = [0,0]
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a,b) => {
       return b[0] > b[1] ? `At match ${a[0]} - ${a[1]}, ${a[0]} won!` :
           b[0] < b[1] ? `At match ${a[0]} - ${a[1]}, ${a[1]} won!` :
                 `At match ${a[0]} - ${a[1]}, - teams played draw.`
    }


    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
