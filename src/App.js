import './App.css';
import React from "react";


function App() {


    const arr2 = "The quick brown fox jumps over the lazy dog"
    const arr3 = 4
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        const res = a.split(' ')
        const res2 = []
        for (let i = 0; i < res.length; i++){
            if (res[i].length > b){
                res2.push(res[i])
            }
        }
        return res2
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
