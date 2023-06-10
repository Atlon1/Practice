import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = "This Is A Test"
    // const arr3 = [1, 2, 3,4]
    // const arr4 = 0
    // const arr5 = true


    const result = (a) => {
        return a.split(' ').map(elem => elem[0]).join('')
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
