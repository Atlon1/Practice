import './App.css';
import React from "react";


function App() {


    const arr1 = 2.14
    // const arr2 = 25
    // const arr3 = 0
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        if (Number.isInteger(a) && a > 0){
            let res = 0
            for (let i = 0; i <= a; i++){
                res += i
            } return res
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
