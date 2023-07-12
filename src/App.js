import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 =["Banana", "Orange", "Apple", "Mango", 0, 2, 2]

    const arr3 = 10
    const arr4 = 21
    // const arr5 = 5000




    const result = (a,b,c) => {

            return a.reduce(function(x, fn) {
                return fn(b)
            }, b)

    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
