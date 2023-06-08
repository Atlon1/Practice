import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = [82,91,72,76,76,100,85]
    // const arr3 = 2
    // const arr4 = 0
    // const arr5 = true


    const result = (a) => {
      const odd = a.filter((elem, index, array) => {
          return  (array.indexOf(elem) === index) % 2 === 0
      }).sort((a,b) => a - b)

        const even = a.filter((elem, index, array) => {
          return  (array.indexOf(elem) === index) % 2 !== 0
      }).sort((a,b) => a - b).reverse()


        return [...odd, ...even]
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
