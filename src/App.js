import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = [1, 10, 100]
    // const arr2 = 5
    // const arr3 = 4
    // const arr4 = 8
    // const arr5 = true



    const result = (a) => {
       let arr = a.sort((a,b)=> a-b)
        if (arr[arr.length-1] === arr[arr.length-2]){
            return arr[arr.length-2]
        } else {
           return  arr[arr.length-1]
        }

    }


   console.log(result(arr1))



    return (
        <>
        </>
    );
}

export default App;
