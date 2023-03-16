import './App.css';
import React from "react";


function App() {


    const arr1 = [ 3, 5 ]
    // const arr2 = 2
    // const arr3 = 70
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        if (a.length > 2){
            let res = a.sort((a,b) => a - b)
            let res2 = res.shift()
            let res3 = res.pop()
            return res.reduce((a,b)=> a + b)
        } else {
            return 0
        }


    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
