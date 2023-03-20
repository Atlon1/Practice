import './App.css';
import React from "react";


function App() {


    const arr1 = [9, 3, '7', '3']
    // const arr2 = "z"
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        let array = []
        const res = a.filter((n) => typeof n === "number")

        if (res.length > 0) {
           return res.reduce((e, f) => e + f)
        }
        const res2 = a.filter((n) => typeof n === "string").map((e) => Number(e))

        if (res2.length > 0) {
           return res2.reduce((e, f) => e + f)
        }



        console.log(array)

    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
