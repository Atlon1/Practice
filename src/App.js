import './App.css';
import React from "react";


function App() {



    const arr1 = "abcdefghijklm"
    const arr2 = 15
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
       return a.length < 2 || a.length > 100 ? "invalid string" : a.split('').filter((ele, idx) => idx % 2)
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
