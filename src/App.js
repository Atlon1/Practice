import './App.css';
import React from "react";


function App() {


    const arr1 = [0, 1, 2, 2, 3]
    const arr2 = 2
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
       return a.filter((elem) => elem === b).length
    }


    console.log(result(arr1,arr2))

    return (
        <>
        </>
    );
}

export default App;
