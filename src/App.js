import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = "abcd"


    const result = (arr) => {
        const res = arr.split('').map(c=> c+c).join('')
        console.log(res)


    }

    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
