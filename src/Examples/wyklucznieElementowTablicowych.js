import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = [1, 2]
    const arr2 = [1]

    const result = (a,b) => {
        return a.filter((e) => {
            return !b.includes(e)
        })
    }

    console.log(result(arr1,arr2))

    return (
        <>
        </>
    );
}

export default App;
