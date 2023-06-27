import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 = 7
    // const arr3 = 2
    // const arr4 = "l"
    // const arr5 = 5000




    const result = (a) => {
        let array = [];

        for (let i = 1; i <= a; i += 2) {
            array.push(i)
        }
        return array;

    }

    console.log(result(arr2))


    return (
       <>
       </>
    );
}

export default App;
