import './App.css';
import React from "react";


function App() {


    const arr1 = 10
    // const arr2 = 15
    // const arr3 = 0.9
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        let res = ''

        for (let i = 0; i < a; i++){
            res += "+".repeat(a)
            res += "\n"
            for (let j = i; j < i; j++){
                res += "+".repeat(j)
            }

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
