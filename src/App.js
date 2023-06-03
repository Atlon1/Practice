import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = 10
    // const arr3 = 0
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
            let res = 0
            let res2 = 0
        for (let i = 0; i<= a; i++){
            res += i
        }
        res =  res*res

        for (let i = 0; i<= a; i++){
            res2 += Math.pow(i, 2)
        }


        return res - res2
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
