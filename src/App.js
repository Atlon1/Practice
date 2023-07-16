import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 = "Hello, World!"

    const arr3 = 4
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        a = a.toUpperCase()

        return [...a].map((_, i) => a.slice(i) + a.slice(0, i))
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
