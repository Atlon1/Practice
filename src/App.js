import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = [4, 12, 3, 1, 5]
    // const arr2 = [1,2,3,4,5,10,12]
    // const arr3 = 4
    // const arr4 = 8
    // const arr5 = true



    const result = (a) => {
        let newArr = []
        for (let i=0; i < a.length -1; i++){
            newArr.push(a[i]*a[i +1])
        }
        return Math.max(...newArr)
    }


   console.log(result(arr1))



    return (
        <>
        </>
    );
}

export default App;
