import './App.css';
import React from "react";


function App() {


    const arr1 = 'H4w 1r2 y45 t4d1y?'
    // const arr2 = [0,0]
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
      const res = a.split("").map((elem)=>{
          if (elem === '1') {
              return elem = 'a'
          } else if (elem === '2'){
              return elem = 'e'
          } else if (elem === '3'){
              return elem = 'i'
          } else if (elem === '4'){
              return elem = 'o'
          }else if (elem === '5'){
              return elem = 'u'
          } else {
              return elem
          }
      }).join('')

        return res
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
