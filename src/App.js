import './App.css';
import React from "react";


function App() {



    const arr1 = 4
    const arr2 = 2
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true



    const result = (a, b) => {
       let res = 1
        for (let i = 1; i <= b; i++){
            res = res * a
        }
            return res
    }

    console.log(result(arr1, arr2))


    return (
        <>
        </>
    );
}

export default App;
