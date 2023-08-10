import './App.css';
import React from "react";


function App() {


    const arr1 = [15,11,10,7,12]
    const arr2 = 2
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
      return [...Array(a.sort((a,b)=> a- b).length)].map((_, idx) => idx % 2 ? a.shift() : a.pop())
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
