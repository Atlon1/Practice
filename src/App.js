import './App.css';
import React from "react";


function App() {



    const arr1 = 1024
    const arr2 = "4:3"
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
       const [ab, bc ] = b.split(":")
        const height = a / ab * bc
        return a + "x" + height
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
