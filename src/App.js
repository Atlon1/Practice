import './App.css';
import React from "react";


function App() {


    const arr2 = 3
    const arr3 = 3
    const arr4 = 4
    // const arr5 = 5000




    const result = (a, ...b) => {
        return b.every(n => a % n === 0);
    }

    console.log(result(arr2))


    return (
       <>
       </>
    );
}

export default App;
