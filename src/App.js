import './App.css';
import React, {useState} from "react";



function App() {


    const arr2 = ["x", "y", ["z"]]
    // const arr3 = '==T'
    // const arr4 = 110
    // const arr5 = true


    const result = (a) => {
        let counter = a.length;
        a.forEach(item => {
            counter += Array.isArray(item) ? result(item) : 0;
        });
        return counter;
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
