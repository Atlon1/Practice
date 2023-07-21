import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 ="hel2!lo"

    const arr3 = 3
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        return  a.replace(/[^a-z\d]/gi, "").length


    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
