import './App.css';
import React from "react";


function App() {


    const arr2 = "Yes?"
    // const arr3 = "/"
    // const arr4 = 0
    // const arr5 = 5000


    const result = (a) => {
     return a.includes("?") ? a : `${a}?`
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
