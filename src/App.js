import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 ="Sam"

    const arr3 = "number"
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        const res = [...a]

       if (a.length <= 3){
           return "Error: Name too short"
       } else if (res[2] === "a" || res[2] === "e" || res[2] === "i" || res[2] === "o" || res[2] === "u"){
           return a.slice(0,4)
       } else {
           return a.slice(0, 3)
       }

    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
