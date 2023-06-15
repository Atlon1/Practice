import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = [1, 4, 1, 2, 11, 2, 3, 1]
    // const arr3 = 6
    // const arr4 = 3
    // const arr5 = true


    const result = (a) => {
       const res = a.filter((elem) => elem === 1).length
        return a.filter((elem) => elem === res).length
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
