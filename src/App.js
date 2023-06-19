import './App.css';
import React from "react";


function App() {


    const arr2 = "!!!??"
    // const arr3 = 5
    // const arr4 = 100
    // const arr5 = 5000


    const result = (a) => {
        const res = [...a].filter(elem => elem === "?" ).length
        const res2 = [...a].filter(elem => elem === "!" ).length
        return res * res2
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
