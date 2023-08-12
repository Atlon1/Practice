import './App.css';
import React from "react";


function App() {


    const arr1 = ['a', 'b', 'c', 'd', 'e']
    const arr2 = [1, 2, 3, 4, 5]
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a, b) => {
        let res = []
        if (a.length > b.length) {
            for (let i = 0; i < a.length; i++) {
               if(a[i])  res.push(a[i])
                if(b[i]) res.push(b[i])
            }
        } else {
            for (let i = 0; i < b.length; i++) {
                if(a[i])  res.push(a[i])
                if(b[i]) res.push(b[i])
            }
        }
        return res
    }
    console.log(result(arr1, arr2))


    return (
        <>
        </>
    );
}

export default App;
