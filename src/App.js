import './App.css';
import React from "react";


function App() {


    const arr1 = [1,2,3,4,5]
    const arr2 = 4
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        return a.map((elem) => elem * elem).reduce((a,b) => a + b)
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
