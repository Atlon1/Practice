
import './App.css';
import React from "react";


function App() {


    const arr1 = 5
    // const arr2 = 'Phoenix'
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        let res = ''
        for (let i = 1; i <= a; i++){
            for (let j = 1; j <= a; j++){
                if (j < a){
                    let res2 = j * i
                    res += ` ${j} * ${i} = ${res2} |`
                } else {
                    let res2 = j * i
                    res += ` ${j} * ${i} = ${res2}`
                }
            }
            res += `\n`
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