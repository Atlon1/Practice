import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = 1
    const arr2 = 2
    const oper = "add"


    const result = (a,b,operator) => {
        if (operator === "add"){
            return a + b
        } else if (operator === "subtract"){
            return a - b
        } else if (operator === "multiply"){
            return a * b
        } else if (operator === "divide"){
            return a / b
        }
    }

    console.log(result(arr1,arr2,oper))

    return (
        <>
        </>
    );
}

export default App;
