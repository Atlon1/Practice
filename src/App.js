import './App.css';
import React from "react";


function App() {


    const arr1 = [10,2,3,8,1,10,4]
    const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        return  a.sort((a,b)=> a - b).reverse().slice(0, b).reduce((a,b) => a *b)


    }


    console.log(result(arr1,arr2))

    return (
        <>
        </>
    );
}

export default App;
