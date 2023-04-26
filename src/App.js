import './App.css';
import React from "react";


function App() {


    const arr1 = "Hello World"
    // const arr2 = '\C'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
            if (a.toLowerCase() === a){
                return a.toUpperCase()
            } else if (a.toUpperCase() === a){
                return a.toLowerCase()
            } else return  a.split('').map((elem) => {
                if (elem.toLowerCase() === elem){
                    return elem.toUpperCase()
                } else if (elem.toUpperCase() === elem){
                    return elem.toLowerCase()
                }
            }).join('')
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
