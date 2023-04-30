import './App.css';
import React from "react";


function App() {


    const arr1 = 'asd43_34'
    // const arr2 = [1, 2, 5]
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return /^[0-9a-z_]{4,16}$/.test(a)

    }



    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
