import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 =1892376

    const arr3 = 5
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        const res = a.toString().split('').map((elem) => parseInt(elem)).reduce((a,b) => a + b)

        return res % 9 === 0
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
