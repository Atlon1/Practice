import './App.css';
import React from "react";


function App() {


    const arr2 = ['kevin', 'has','no','space']
    const arr3 = 3
    const arr4 = 4
    // const arr5 = 5000




    const result = (a) => {
        let res =[]
        let res2 =[]
        for (let i = 0; i < a.length; i++){
            res += a[i]
            res2.push(res)
        }

        return res2
    }

    console.log(result(arr2))


    return (
       <>
       </>
    );
}

export default App;
