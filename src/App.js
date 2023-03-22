import './App.css';
import React from "react";


function App() {


    const arr1 = [15, 7, 3, -8]
    // const arr2 = "z"
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        if (a.sort((a,b)=> a + b) === a){
            return 'yes, ascending'
        } else if (a.sort((a,b)=> a - b) === a){
            return 'yes, descending'
        } else {
            return "no"
        }
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
