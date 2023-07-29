import './App.css';
import React from "react";


function App() {


    const arr2 = "avcxe"
    const arr3 = "avbeee"
    const arr4 = 4
    // const arr5 = 5000




    const result = (a,b) => {

       return a.length >= b.length ? b + a.split('').reverse().join('') + b : a + b.split('').reverse().join('') + a
    }

    console.log(result(arr2,arr3))


    return (
       <>
       </>
    );
}

export default App;
