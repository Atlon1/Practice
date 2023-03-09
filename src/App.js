import './App.css';
import React from "react";


function App() {


    const arr1 = 135
    const arr2 = 1.92
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (a,b) => {
       const res = (a/Math.pow(2, b)).toFixed(2)

        if (res <= 18.5){
            return  "Underweight"
        } else if ( res <= 25){
            return "Normal"
        } else if ( res <= 30){
            return "Overweight"
        }else {
            return  "Obese"
        }

    }


    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
