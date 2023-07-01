import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 ="ceggodegge heggeregge"

    const arr3 = "number"
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        return a.replace(/egg/g, "")
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
