import './App.css';
import React from "react";


function App() {


    const arr1 = "attitude"
    // const arr2 = [1, 2, 5]
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (string) => {
        return string.split('').reduce((acc, char) => {
            return acc + char.charCodeAt() - 96;
        }, 0);

    }



    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
