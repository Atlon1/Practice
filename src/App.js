import './App.css';
import React,{useState}from "react";


function App() {


    const arr2 = "aeiou, abc"
    // const arr3 = "/"
    // const arr4 = 0
    // const arr5 = 5000



    const result = (a) => {
        return a.split('').map(elem => ("aeiouAEIOU".includes(elem)) ? 1 : 0).join('')
    }

    console.log(result(arr2))


    return (
        <div>

        </div>
    );
}

export default App;
