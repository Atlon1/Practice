import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = [1, 2, 3, 12]


    const result = (a) => {

        let array = []

        for (let i = a[0]; i <= a.slice(-1); i++) {
            array.push(i)
        }

        return array

    }

    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
