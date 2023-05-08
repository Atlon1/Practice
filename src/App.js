import './App.css';
import React from "react";


function App() {


    const arr1 = [0,1,2,3]
    // const arr2 = 3
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return a.filter((elem) => elem % 2 === 0)
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
