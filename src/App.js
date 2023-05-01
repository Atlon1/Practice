import './App.css';
import React from "react";


function App() {


    const arr1 = "Jeong-Ho Aristotelis"
    // const arr2 = [1, 2, 5]
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
       const res = []

        for (let i = 0; i < a.length; i++){
            res[i] =+ 30
        }
        return res.reduce((a,b) => a + b)
    }



    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
