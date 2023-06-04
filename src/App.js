import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = -6
    const arr3 = -5
    const arr4 = 0
    // const arr5 = true


    const result = (a,b,c) => {
        if ((a + c) > (b+c)){
            return 1
        } else if ((a + c) > (b+c)){
            return -1
        } else
            return 0
    }

    console.log(result(arr2,arr3,arr4))

    return (
        <div>

        </div>
    );
}

export default App;
