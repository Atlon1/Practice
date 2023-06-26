import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 ="hello"
    const arr3 = "world"
    const arr4 = "l"
    // const arr5 = 5000




    const result = (a,b,c) => {
       return `${a.split(c, 1)}${b.slice(b.indexOf(c))}`
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
