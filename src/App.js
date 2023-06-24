import './App.css';
import React,{useState}from "react";


function App() {


    const arr2 = "aeiou, abc"
    // const arr3 = "/"
    // const arr4 = 0
    // const arr5 = 5000



    const result = (a) => {
        let res = a.split('')
        let res2 =[]
        for (let i = 0; i < res.length; i++){
            if (res[i] === "a" || res[i] === "e" ||res[i] === "i" ||res[i] === "o" ||res[i] === "u"){
                res2.push('1')
            } else {
                res2.push('0')
            }
        }

        return (res2.join('')).toString()
    }

    console.log(result(arr2))


    return (
        <div>

        </div>
    );
}

export default App;
