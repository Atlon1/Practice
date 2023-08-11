import './App.css';
import React from "react";


function App() {


    const arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const arr2 = 'bb'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
      return  a.reduce((ele,idx,arr)=> ele+idx[arr],0)
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
