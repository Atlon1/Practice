import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = "8 3 -5 42 -1 0 0 -9 4 7 4 -4"


    const result = (a) => {
       a = a.split(' ')
        return `${Math.max(...a)} ${Math.min(...a)}`
    }

    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
