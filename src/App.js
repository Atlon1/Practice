import './App.css';
import React from "react";


function App() {


    const arr1 = 2792
    // const arr2 = 2
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
      let unlocky = 0

        for(let i = 0; i <12;i++){
            if(new Date(a,i,13).getDay() === 5){
                unlocky ++
            }
        }

        return unlocky
    }


    console.log(result(arr1))

    return (
        <>
        </>
    );
}

export default App;
