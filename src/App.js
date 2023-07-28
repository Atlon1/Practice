import './App.css';
import React from "react";


function App() {


    const arr2 = "1250"
    const arr3 = 3
    const arr4 = 4
    // const arr5 = 5000




    const result = (a) => {

        let res2 = []
        for (let i = 0; i < a.length; i++){
            let temp = []
            for (let j = 0; j <= (a[i]); j++){
                temp.push(j)
            } res2.push(temp)
        }

        return res2
    }

    console.log(result(arr2))


    return (
       <>
       </>
    );
}

export default App;
