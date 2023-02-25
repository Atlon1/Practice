import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = 10
    // const arr2 = "garlic naan"


    const result = (a) => {
       if (a === 1 ||a === 2 || a === 3){
           return 1
       } else if (a === 4 ||a=== 5 ||a===  6){
           return 2
       }else if (a === 7||a===  8 ||a===  9){
           return 3
       }else if (a === 10 ||a===  11 ||a===  12){
           return 4
       }

    }

    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
