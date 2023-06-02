import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = 1
    // const arr3 = 0
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        const res = a.toString().split('')

        return res.length <= 1 ? `Value is 0000${a}` :
            res.length <= 2 ? `Value is 000${a}` :
                res.length <= 3 ? `Value is 00${a}` :
                res.length <= 4 ? `Value is 0${a}` : `Value is ${a}`

    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
