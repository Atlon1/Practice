import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 = "Hi!"

    const arr3 = 4
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
       return a.replace(/\b!+/g, "")
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
