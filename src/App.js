import './App.css';
import React from "react";


function App() {


    const arr1 = ['what', 'a', 'great', 'kata']
    const arr2 = 'a'
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a,b) => {
        return a.includes(b)
    }


    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
