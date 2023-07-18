import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 ="This is a string"

    const arr3 = 3
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
       return (a.split(' ')[b]+"-").repeat(c).slice(0,-1)
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
