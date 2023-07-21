import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 ='hello world'

    const arr3 = '-'
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        return a.split('').map((elem, i, arr) => arr.filter((vi) => vi === elem).length).join(b)


    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
