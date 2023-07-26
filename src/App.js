import './App.css';
import React from "react";


function App() {


    const arr2 = [49,3,5,300,7]
    const arr3 = 5
    const arr4 = 1.8
    // const arr5 = 5000




    const result = (a) => {
       let count = Math.round(a.reduce((a,b) => a + b)/a.length)

        return count
    }

    console.log(result(arr2))


    return (
       <>
       </>
    );
}

export default App;
