import './App.css';
import React from "react";


function App() {



    const arr1 = ["yoda", "best", "has"]
    const arr2 = 3
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
     return a.reduce((a,b,index) => a + b [index], "")
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
