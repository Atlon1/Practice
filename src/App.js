import './App.css';
import React from "react";


function App() {


    const arr2 = 9
    const arr3 = 5
    const arr4 = 1.8
    // const arr5 = 5000




    const result = (a,b,c) => {
      if (a + b === c){
          return "addition"
      } else if (a - b === c){
          return 'subtraction'
      }else if (a * b === c){
          return 'multiplication'
      }else if (a / b === c){
          return 'division'
      }
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
