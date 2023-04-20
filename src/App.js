import './App.css';
import React from "react";


function App() {


    const arr1 = ""
    // const arr2 = 0.05
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {

        const res = a.length

        if (0 < res) {
            return a.split(' ').map(line => line = "sex").join(' ')
        } else return ""


    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
