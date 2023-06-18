import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = [0, 5, 1, 3, 2, 9, 7, 6, 4]
    // const arr3 = "xzca"
    // const arr4 = 4
    // const arr5 = true


    const result = (a) => {
        for (let i = 0; i < 10; i++) {
            if (a.indexOf(i) === -1) {
                return i
            }
        }
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
