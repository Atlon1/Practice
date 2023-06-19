import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = 10
    const arr3 = 10
    const arr4 = 5
    // const arr5 = true


    const result = (a,b,c) => {
       let days = 0
        let gas = 100
        while (gas >= c){
           gas -= gas * b / 100
            days++
        }
        return days
    }

    console.log(result(arr2,arr3,arr4))

    return (
        <div>

        </div>
    );
}

export default App;
