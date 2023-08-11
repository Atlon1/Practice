import './App.css';
import React from "react";


function App() {


    const arr1 = [1,2,3]
    const arr2 = 'bb'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        return a.every(function(x, idx) {
            return idx === 0 ? true : a[idx] >= a[idx-1];
        });
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
