import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = 10.1289767789
    // const arr3 = 6
    // const arr4 = 3
    // const arr5 = true


    const result = (a) => {
      return +a.toFixed(4).slice(0, -2);
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
