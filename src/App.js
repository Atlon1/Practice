import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = -6
    const arr3 = -5
    // const arr4 = 0
    // const arr5 = true


    const result = (strarr, k) => {
        if (k <= 0 || k > strarr.length) {
            return "";
        }

        return strarr
            .map((value, index) => (
                strarr.slice(index, index+k).join('')
            ))
            .reduce((longest, current) => current.length > longest.length ? current : longest)
    }

    console.log(result(arr2,arr3))

    return (
        <div>

        </div>
    );
}

export default App;
