import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 = [2, 10, 9, 3]

    // const arr3 = 3
    // const arr4 = 98
    // const arr5 = 5000




    const result = (a) => {
        return !!a.length && a.every(x => a.some(y => y === x -1 || y === x + 1))

    }

    console.log(result(arr2))


    return (
       <>
       </>
    );
}

export default App;
