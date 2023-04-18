import './App.css';
import React from "react";


function App() {


    const arr1 = 500
    const arr2 = 15
    const arr3 = 0.9
    // const arr4 = 8
    // const arr5 = true


    const result = (a,b,c) => {
        const systemA = b * 3
        const systemB = a + b * c + (b * c) * c + (b * c * c) * c


        return systemA, systemB

    }


    console.log(result(arr1,arr2,arr3))


    return (
        <>
        </>
    );
}

export default App;
