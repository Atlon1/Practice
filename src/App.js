import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = [["_","_","_","_","@","_","_","_","@","_","_","_","_","@","@"],["_","_","_","_","_","_","_","_","_","_","@","_","@","@","_"],["@","_","_","@","@","_","_","_","_","_","_","_","_","_","_"]]
    const arr3 = 6
    const arr4 = 3
    // const arr5 = true


    const result = (a,b,c) => {
       let res = 0
        let dog = 0
        for ( let i = 0; i < a.length; i++){
            res += a[i].filter((elem) => elem === "@").length
            dog += a[i].filter((elem) => elem === "D").length
        }
        console.log(res)
        if ( dog > 0) {
            return"Dog!!"
        } else  if(res <= (b * c)){
            return "Clean"
        } else {
            return "Cr@p"
        }
    }

    console.log(result(arr2,arr3,arr4))

    return (
        <div>

        </div>
    );
}

export default App;
