import './App.css';
import React from "react";


function App() {


    const arr1 = 'man i need a taxi up to ubud'
    // const arr2 = 3
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        const res = a.split(' ').sort((a,b)=> a.charCodeAt(a.length -1) - b.charCodeAt(b.length -1))

        return res
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
