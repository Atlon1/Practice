import './App.css';
import React, {useState} from "react";



function App() {


    const arr2 = [16,17,4,3,5,2]
    // const arr3 = '==T'
    // const arr4 = 110
    // const arr5 = true


    const result = (a) => {
        return a.map((elem) => a.reduce((a,b) => a * b)/ elem)
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
