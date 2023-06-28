import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 = [6, 9, 3, 4, 3, 82, 11]

    const arr3 = 3
    // const arr4 = 98
    // const arr5 = 5000




    const result = (a,b) => {
        return a.forEach((v,i) =>{if(v===b){a.push(i)}})

    }

    console.log(result(arr2,arr3))


    return (
       <>
       </>
    );
}

export default App;
