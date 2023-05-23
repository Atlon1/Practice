import './App.css';
import React from "react";


function App() {


    const arr1 = "supercalifragilisticexpialidocious"
    const arr2 = 3
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        let result = [];

        for (let i = 0; i < a.length; i += b) {
            result.push(a.slice(i, b + i));
        }
        return result.join(' ')
    }


    console.log(result(arr1,arr2))

    return (
        <>
        </>
    );
}

export default App;
