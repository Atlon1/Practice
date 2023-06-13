import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = 13
    // const arr3 = 6
    // const arr4 = 3
    // const arr5 = true


    const result = (a) => {
        let res = 1
        for (let i = 1; i <= a ; i++){
            res *= i
        }

        return Math.ceil(((res - 1) + 1)/(a*a)) === a ? true : false
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
