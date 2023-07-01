import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 ="19:99:99"

    const arr3 = "number"
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        const date = new Date()
        if (a === ""){
            return a
        }
        if (!/^\d{2}\:\d{2}\:\d{2}$/g.test(a)){
            return null
        }
        date.setUTCHours(...a.split(":"))
        return date.toLocaleTimeString('en',{hour12: false})
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
