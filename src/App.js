import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 = 'a b c d e fgh'

    const arr3 = 4
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
      let res = a.split(' ').sort((a,b) => b.length - a.length)
          return res[0]
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
