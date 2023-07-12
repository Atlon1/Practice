import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 =[5,2,8]

    const arr3 = 10
    const arr4 = 21
    // const arr5 = 5000




    const result = (a,b,c) => {
        return a.slice(1).reduce((s,n,i)=>s+Math.abs(n-a[i]),0)
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
