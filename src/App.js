import './App.css';
import React from "react";


function App() {



    const arr1 = [4,-8,98,-12,-7,90,100]
    const arr2 = 3
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
       for (let i = 0; i < a.length; i++){
           if (a[i] % 2 !== 0){
               return a.indexOf(a[i])
           }
       }
       return -1
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
