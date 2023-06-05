import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = ["a", "b", "c", "d", "c", "e", "f", "g", "h", "z"]
    const arr3 = 2
    // const arr4 = 0
    // const arr5 = true


    const result = (a,b) => {
      return `name: ${a[b-1]}`
    }

    console.log(result(arr2,arr3))

    return (
        <div>

        </div>
    );
}

export default App;
