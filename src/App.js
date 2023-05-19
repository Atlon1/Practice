import './App.css';
import React from "react";


function App() {


    const arr1 = 2
    // const arr2 = [1, 3]
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {

        if (a === 1){
            return "It's Odious!"
        } else if (a % 2 === 0){
            return "It's Odious!"
        } else return "It's Evil!"
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
