import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = 12
    const arr2 = 50
    const arr3 = 4
    const arr4 = 8
    const arr5 = true



    const result = (a,b,c,d,e) => {
       if (e === true){
           let res3 = d / 2
           let res = b / res3
           let res2 = a / c
           if ( res2 < res){
               return "Alive"
           } else  {
               return "Shark Bait!"
           }
       } else {

        let res = b - d
        let res2 = a - c

        if ( res2 > res){
            return "Alive"
        } else  {
            return "Shark Bait!"
        }
       }

    }

   console.log(result(arr1,arr2,arr3,arr4,arr5))



    return (
        <>
        </>
    );
}

export default App;
