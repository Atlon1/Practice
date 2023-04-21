import './App.css';
import React from "react";


function App() {


    const arr1 = -456
    const arr2 = 3
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        const res = a.toString().split('').reverse()

        if (b <= 0){
            return -1
        } else if (res.length < b ){
            return 0
        } else if (res.length >= b){
            let res3 = parseInt(Number(res[b - 1]))
            if (isNaN(res3)){
                return 0
            }
            return res3
        }
    }


    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
