import './App.css';
import React from "react";


function App() {


    const arr2 = "drake"
    // const arr3 = 5
    // const arr4 = 100
    // const arr5 = 5000


    const result = (a) => {
       return a.replace(/[aeiou]/g, "")
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
