import './App.css';
import React from "react";


function App() {


    const arr1 = [-0, 1, 2, -3, 4, 5, -6]
    // const arr2 = [1, 2, 5]
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
      const res = a.sort((a,b) => a-b)
        if (a.length <= 1){
            return 0
        } else {
            const res2 = res[res.length - 1] -res[0]
            return res2
        }

    }



    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
