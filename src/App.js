import './App.css';
import React, {useState} from "react";



function App() {


    const arr2 = 3
    // const arr3 = '==T'
    // const arr4 = 110
    // const arr5 = true


    const result = (a) => {
        const primeNumber = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
        let res = 1
        for (let i = 0; i < a; i++){
           res = res * primeNumber[i]
        }

        return res
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
