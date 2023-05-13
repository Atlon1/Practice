import './App.css';
import React from "react";


function App() {


    const arr1 = "ssas"
    // const arr2 = 5
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
      if (typeof a === "string"){
          return "Who ate the last cookie? It was Zach!"
      } else if (typeof a === "number"){
          return "Who ate the last cookie? It was Monica!"
      } else {
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
