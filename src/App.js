import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = [1,2,3,4,5,6,7,68,69,70,15,17]
    // const arr3 = -5
    // const arr4 = 0
    // const arr5 = true


    const result = (a) => {
       return a.filter((a) => a.toString().includes('7'))
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
