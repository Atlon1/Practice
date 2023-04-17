import './App.css';
import React from "react";


function App() {


    const arr1 = 2789
    // const arr2 = 3
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        const res = a.toString().split('').join('')
        const res2 = a.toString().split('').sort((a,b)=> a - b).join('')


        if (res === res2){
            return true
        } else {
            return false
        }

    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
