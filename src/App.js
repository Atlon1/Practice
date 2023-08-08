import './App.css';
import React from "react";


function App() {


    const arr1 = 'alaska'
    const arr2 = 4
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
       const res = a.split('')
       let res2 = res[0].toUpperCase()
        return res[0] === res[res.length-1] ? `${res2 + res.slice(1).join('')+ res.slice(1).join('')}` : `The ${res2 + res.slice(1).join('')}`

    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
