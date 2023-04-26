import './App.css';
import React from "react";


function App() {


    const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 9, 9, 9, 8]
    // const arr2 = '\C'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
        const res = a.map((elem, id) => {
            return elem + (id + 1)
        })

        for(let i = 0; i < res.length; i++){
            if (res[i] <= 9){
                res[i] -= 0
            }
            else if (res[i] <= 19){
                res[i] -= 10
            } else if (res[i] >= 20){
                res[i] -= 20
            }
        }

        return res
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
