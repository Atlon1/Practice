import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 ="abd"

    const arr3 = 10
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        return 'abcdefghijklmnopqrstuvwxyz'.includes([...a].sort().join(''))


    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
