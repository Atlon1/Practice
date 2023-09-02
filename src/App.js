import './App.css';
import React from "react";


function App() {



    const arr1 = []
    const arr2 = 3
    const arr3 = 1
    // const arr4 = 1200
    // const arr5 = true



    const result = (a, b, c) => {
        if (a <= 0){
            return null
        }   else {
            return  a[a.length - 1]
        }
    }


    console.log(result(arr1,arr2, arr3))


    return (
        <>
        </>
    );
}

export default App;
