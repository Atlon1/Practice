import './App.css';
import React from "react";


function App() {



    const arr1 = 0
    const arr2 = 3
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true



    const result = (a,b) => {
        if (a <= 0 || b <= 0){
            return []
        } else {

            const arr =[a]

            for (let i = 0; b-1 > i; i++){
                let res = arr[arr.length - 1]*arr[arr.length - 1]
                arr.push(res)
            }
            return arr
        }

    }


    console.log(result(arr1,arr2))

    return (
        <>
        </>
    );
}

export default App;
