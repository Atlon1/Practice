import './App.css';
import React from "react";


function App() {





    const arr1 = [14,8,44,5,10,6,30,50,41,50,34,10,45,36]
    const arr2 = 10
    const arr3 = 3
    // const arr4 = 1200
    // const arr5 = true

    const result = (a,b) => {
        return Math.ceil(parseFloat(a.reduce((a,b) => a + b)))
    }

    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
