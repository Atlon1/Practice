import './App.css';
import React from "react";


function App() {


    const arr1 = "9♦"
    // const arr2 = 1.92
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        const res = a.split('').reverse()

        return res[0] === '♣' ? 'clubs' :
            res[0]  === '♦' ? 'diamonds' :
                res[0]  === '♥' ? 'hearts' : 'spades'
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
