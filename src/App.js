import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = "beeeEBb"
    const arr3 = 2
    const arr4 = 0
    // const arr5 = true


    const result = (a) => {
     return a.toLowerCase()
         .split('')
         .sort()
         .map((elem,index, array)=>{ return (index===0 || elem !== array[index-1] ? elem.toUpperCase(): elem)})
         .join('')
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
