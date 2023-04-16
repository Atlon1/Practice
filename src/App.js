import './App.css';
import React from "react";


function App() {


    const arr1 = 1
    // const arr2 = 3
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
       let len = a.toString().length
        let num = (a*a).toString().slice(-len)
        return a == num ? 'Automorphic' : 'Not!!'
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
