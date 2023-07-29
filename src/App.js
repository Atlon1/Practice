import './App.css';
import React from "react";


function App() {


    const arr2 = "8409"
    const arr3 = 3
    const arr4 = 4
    // const arr5 = 5000




    const result = (a) => {

       return [...a].reduce((a,b)=> +a+b,0)%3===0
    }

    console.log(result(arr2))


    return (
       <>
       </>
    );
}

export default App;
