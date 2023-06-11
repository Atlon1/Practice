import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = 125
    const arr3 = 132
    // const arr4 = 0
    // const arr5 = true


    const result = (a,b) => {
      let res = Array(10).fill(0)

        for ( let i = a; i <= b;i++){
            for (let j of (i + "")){
                res[j]++
            }
        }

        return res
    }

    console.log(result(arr2,arr3))

    return (
        <div>

        </div>
    );
}

export default App;
