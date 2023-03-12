import './App.css';
import React from "react";


function App() {


    const arr1 = "My \"me3ssy\" d8ata issues2! Will1 th4ey ever, e3ver be3 so0lved?"
    // const arr2 = "Good"
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
return a.replace(/[123456789]/g, "")
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
