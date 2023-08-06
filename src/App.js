import './App.css';
import React from "react";


function App() {


    const arr1 = 'What feck damn cake'
    const arr2 = 4
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        const res = a.split(' ').map((elem)=> elem.toUpperCase() + "!!!!").join(' ')

        return res.replace(/A/g, "@").replace(/[AEIOU]/g, "*")
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
