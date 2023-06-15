import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = "!!???!????"
    const arr3 = "??!!?!!!!!!!"
    // const arr4 = 110
    // const arr5 = true


    const result = (a,b) => {
        const split1 = a.split('')
        const split2 = b.split('')

        let res = 0
        let res2 = 0

        for(let i = 0; i < a.length; i++){
            if (split1[i] === "!"){
                res += 2
            } else {
                res += 3
            }
        }

        for(let i = 0; i < b.length; i++){
            if (split2[i] === "!"){
                res2 += 2
            } else {
                res2 += 3
            }
        }

        return res > res2 ? "Left" : res < res2 ? "Right" : "Balance"


    }

    console.log(result(arr2,arr3))

    return (
        <div>

        </div>
    );
}

export default App;
