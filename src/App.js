import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = ['a', 'b', 'c']
    const arr3 = [1, 2, 3,4]
    // const arr4 = 0
    // const arr5 = true


    const result = (a, b) => {

        const obj = {}
        for (let i = 0; i < a.length; i++) {
            obj[a[i]] = i < b.length ? b[i] : null
        }

        return obj
    }

    console.log(result(arr2, arr3))

    return (
        <div>

        </div>
    );
}

export default App;
