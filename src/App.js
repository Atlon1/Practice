import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = 'abcde'
    const arr2 = 'cde'


    const result = (a,b) => {
        return a.endsWith(b)

    }

    console.log(result(arr1,arr2))

    return (
        <>
        </>
    );
}

export default App;
