import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 ="a **&  bZ"

    const arr3 = 10
    const arr4 = 21
    // const arr5 = 5000




    const result = (a,b,c) => {
        a = a.toLowerCase()
        return 'abcdefghijklmnopqrstuvwxyz'.split('').map((elem) =>  a.indexOf(elem) !== -1 ? 1 : 0).join('')
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
