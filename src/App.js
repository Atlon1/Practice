import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]


    const result = (arr) => {

        let total = 0;



        for (let i = 0; i < arr.length; i++){
            total += Math.min(...arr[i])
        }

        return total;


    }

    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
