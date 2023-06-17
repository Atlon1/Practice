import './App.css';
import React, {useState} from "react";



function App() {


    const arr2 = [1, 6, 9, -3, 4, -78, 0]
    const arr3 = -3
    const arr4 = 4
    // const arr5 = true



    const result = (a,b,c) => {
       for (let i = 0; i < a.length; i++){
           if (a[i] === b && a[i + 1] === c ){
               return true
           } else if (a[i] === c && a[i +1] === b){
               return true
           }
       }
       return false
    }

    console.log(result(arr2,arr3,arr4))

    return (
        <div>

        </div>
    );
}

export default App;
