import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = 32
    // const arr3 = 6
    // const arr4 = 3
    // const arr5 = true


    const result = (a) => {
       const res = a.toString().split('')
        for(let i = 0; i < res.length-1;i++){
            if (Math.abs(res[i] - res[i + 1] !== 1)){
                return 'Not!!'
            }
        }
        return "Jumping!!"
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
