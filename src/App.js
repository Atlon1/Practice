import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 =[1, 2, 3, 4]

    const arr3 = 4
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        let lest = arguments[arguments.length - 1]
       return a[a.length - 1] || lest
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
