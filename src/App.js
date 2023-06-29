import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 = [1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]

    const arr3 = 3
    // const arr4 = 98
    // const arr5 = 5000




    const result = (a) => {
        return a.filter((ele, i)=> i !==a.indexOf(ele) && i === a.indexOf(ele, a.indexOf(ele) + 1))

    }

    console.log(result(arr2))


    return (
       <>
       </>
    );
}

export default App;
