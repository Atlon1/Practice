import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 =[ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]

    const arr3 = 10
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        return a.filter((elem) => elem[0].slice(-1) === "_")


    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
