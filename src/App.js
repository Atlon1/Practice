import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 =24

    const arr3 = 4
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        let average = 0;
        if (a < 0 || b < 0 || a- b < 0) return null;
        else average = (a - b) /2;

        return [average+b, average];
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
