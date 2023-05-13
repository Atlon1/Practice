import './App.css';
import React from "react";


function App() {


    const arr1 = [ -49, -47, 32, 34, -39, -28, -35, -17, -15, 30, -22, -5, -3, 13, 31, -50, 34, 41, 45, -36, 38, 45, 45 ]
    // const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        const res = a.filter((elem)=> elem % 2 === 1).sort((a,b) => a - b)
        let j = 0
        let arr = []
        for (let i = 0; i < a.length; i++){
            if (a[i] % 2 === 1){
                arr.push(res[j])
                j++
            } else {
                arr.push(a[i])
            }
        }
        return arr
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
