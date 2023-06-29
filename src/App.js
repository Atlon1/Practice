import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 = ['a', 'b', 'c']

    const arr3 = 'd'
    // const arr4 = 98
    // const arr5 = 5000




    const result = (a,b) => {
        if (a[a.lastIndexOf(b) + 1] >= a.length){
            return undefined
        } else {
            return a[a.lastIndexOf(b) + 1]
        }

    }

    console.log(result(arr2,arr3))


    return (
       <>
       </>
    );
}

export default App;
