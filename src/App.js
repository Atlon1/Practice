import './App.css';
import React from "react";


function App() {


    const arr1 = 5
    const arr2 = 2
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
      return `It's a ${!Array.isArray(a) ? `fake` : a.includes(5) && a.includes(13) ? "black" : "white"} array`
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
