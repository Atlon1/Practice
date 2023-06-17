import './App.css';
import React, {useState} from "react";



function App() {


    const arr2 = [2, 3, 4, 5]
    // const arr3 = -3
    // const arr4 = 4
    // const arr5 = true



    const result = (a) => {
      if (a === null){
          return 0
      }
      return a.filter((elem, idx) => idx % 2 === 0).reduce((a,b) => a + b)
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
