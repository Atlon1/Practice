import './App.css';
import React, {useState} from "react";



function App() {


    const arr2 = 'xxxxxxxxx'
    const arr3 = '==T'
    // const arr4 = 110
    // const arr5 = true


    const result = (a,b) => {

        let res2 = [...b].filter((elem)=> elem === "=").length + 1
        let res3 = []

        for (let i = 0; i < a.length; i++){
            if (res2 > i ){
                res3.push("o")
            } else if (res2 <= i){
                res3.push("x")
            }
        }

        return res3.join('')
    }

    console.log(result(arr2,arr3))

    return (
        <div>

        </div>
    );
}

export default App;
