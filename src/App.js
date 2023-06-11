import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = "1plus2plus3plus4"
    // const arr3 = "AND"
    // const arr4 = 0
    // const arr5 = true


    const result = (a) => {
      return eval(a.replace(/plus/gi, "+").replace(/minus/gi, "-").toString())
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
