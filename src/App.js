import './App.css';
import React from "react";


function App() {


    const arr1 = "Lets go to the movies"
    // const arr2 = 25
    // const arr3 = 0
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        return a.replaceAll(' ', "").toUpperCase().split('').join('  ')
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
