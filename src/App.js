import './App.css';
import React from "react";


function App() {


    const arr1 = 123546
    const arr2 = 3
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (n,d) => {
        const nums = String(n).split('').map(Number);
        const len = nums.length;
        let index = 0;
        return nums.filter(el => index++ >= len - d);
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
