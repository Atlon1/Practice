import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 ='slug spider rock gravel gravel gravel gravel gravel gravel gravel'

    const arr3 = 4
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        return a.split(' ').map((elem) => elem === "rock" ? "rock" : "gravel").join(' ')
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
