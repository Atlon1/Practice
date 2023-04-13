import './App.css';
import React from "react";


function App() {


    const arr1 = [1,1,2]
    // const arr2 = [0,0]
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
      return a.filter((item, index) => a.indexOf(item) === index)
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
