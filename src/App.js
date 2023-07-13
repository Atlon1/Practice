import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 =[{'country' : 'Spain', 'capital' : 'Madrid'}]

    const arr3 = 10
    const arr4 = 21
    // const arr5 = 5000




    const result = (a,b,c) => {
         return a.map((elem) => `The capital of ${elem.state || elem.country} is ${elem.capital}`)
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
