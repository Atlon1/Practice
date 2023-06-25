import './App.css';
import React,{useState}from "react";


function App() {


    const arr2 = "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
    // const arr3 = "/"
    // const arr4 = 0
    // const arr5 = 5000



    const result = (a) => {
        return a.replace(/[aeiou]/g, v => v.toUpperCase())
    }

    console.log(result(arr2))


    return (
        <div>

        </div>
    );
}

export default App;
