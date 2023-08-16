import './App.css';
import React from "react";


function App() {


    const arr1 = 3
    const arr2 = 4
    const arr3 = 5
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b,c) => {
        const arr = []
        for (let i = a; i < c; i++){
            if( i % a === 0 && i % b === 0 ){
                arr.push(i)
            }
        }
        return arr
    }
    console.log(result(arr1, arr2, arr3))


    return (
        <>
        </>
    );
}

export default App;
