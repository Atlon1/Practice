import './App.css';
import React from "react";


function App() {


    const arr1 = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"
    const arr2 = 'value'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
       return a.toUpperCase()
           .replace(/(\w+):(\w+)/g, "($2, $1)")
           .split(";")
           .sort()
           .join('')

    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
