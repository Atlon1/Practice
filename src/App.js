
import './App.css';
import React from "react";


function App() {


    const arr1 = 10
    // const arr2 = 'Phoenix'
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        let res = ""
        for (let i = 0; i <= a; i++){
            res += "*".repeat(i)
            res += " ".repeat(a - i) +  "\n"
        }
        return res
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;