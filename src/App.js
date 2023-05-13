import './App.css';
import React from "react";


function App() {


    const arr1 = 'Ryan'
    // const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
      if (a === String){
          return "Who ate the last cookie? It was Zach!"
      } else if (a === Number){
          return "Who ate the last cookie? It was Monica!"
      } else if (a === Boolean){
          return  "Who ate the last cookie? It was the dog!"
      }
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
