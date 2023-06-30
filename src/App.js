import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 = [13,10,2,9,5]

    const arr3 = "number"
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        let res =[]
        const sort = a.sort((a,b) => a - b).reverse()
        for (let i = 0; i < a.length - 1; i++){
            res.push(sort[i] - sort[i + 1])
        }

        return Math.max(...res)
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
