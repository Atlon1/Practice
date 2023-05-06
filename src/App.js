import './App.css';
import React from "react";


function App() {



    const arr1 = 3
    const arr2 = 5.0
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true



    const result = (a,b) => {
        const arr =[]

        for (let i = 0; i >= a; i++){
            const res = b * i
            arr.push(res)
        }
        return arr
    }


    console.log(arr1,arr2)

    return (
        <>
        </>
    );
}

export default App;
