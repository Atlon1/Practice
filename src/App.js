import './App.css';
import React from "react";


function App() {


    const arr1 = 'pqksuvy'
    // const arr2 = '222'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
       return a.split('').sort().join('')
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
