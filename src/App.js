import './App.css';
import React from "react";


function App() {


    const arr1 = 2010
    const arr2 = 1990
    // const arr3 = 70
    // const arr4 = 8
    // const arr5 = true


    const result = (a, b) => {
        if (b > a) {
            let res = b - a
            if (res > 2) {
                return `You are ${res} years old.`
            } else {
                return `You are ${res} year old.`
            }

        } else if (a > b) {
            let res = a - b
            if (res > 9) {
                return `You will be born in ${res} years.`
            } else {
                return `You will be born in ${res} year.`
            }

        } else {
            return "You were born this very year!"
        }

    }


    console.log(result(arr1, arr2))


    return (
        <>
        </>
    );
}

export default App;
