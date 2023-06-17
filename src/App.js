import './App.css';
import React, {useState} from "react";



function App() {


    const arr2 = 3
    // const arr3 = '==T'
    // const arr4 = 110
    // const arr5 = true

    const isPrime = (num) => {
        for (let i = 2; i < num; i++){
            if (num % i === 0){
                return false
            }
        }
        return true
    }

    const result = (a) => {
        let arr = []
        let i = 2
        while (arr.length < a){
            if (isPrime(i)){
                arr.push(i)
            }
            i++
        }
        return arr.reduce((a,b)=> a * b)
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
