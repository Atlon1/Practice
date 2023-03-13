import './App.css';
import React from "react";


function App() {


    const arr1 = "camelCase"
    // const arr2 = 850
    // const arr3 = 70
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {

    a = a.split("").map((ele)=> {
        if (ele === ele.toUpperCase()){
            ele = ' ' + ele
        }
        return ele
    })

        return a.join('')


    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
