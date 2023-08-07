import './App.css';
import React from "react";


function App() {


    const arr1 = [['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]
    const arr2 = 4
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
        const res = a.toString().toLowerCase().split(/good/g).length-1
        return res > 2 ? "I smell a series!" : res >0 ? "Publish" : "Fail"
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
