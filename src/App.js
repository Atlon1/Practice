import './App.css';
import React from "react";


function App() {


    const arr1 = "01234"
    const arr2 = 2
    // const arr3 = 1.5
    // const arr4 = 8
    // const arr5 = true


    const result = (a, b) => {
        const array = []


        for (let i = 1; i <= b; i++) {
            if (i === 1) {
                const res = a.split("").filter((a) => a % 2 === 1).join('')
                const res2 = a.split("").filter((a) => a % 2 === 0).join('')
                const arr = [...res, res2].join('')
                array.push(arr)
            } else if (i === 2) {
                const res = a.split("").filter((a) => a % 3 === 0).reverse((a, b) => a + b).join('')
                const res2 = a.split("").filter((a) => a % 3 === 1).reverse((a, b) => a + b).join('')
                const res3 = a.split("").filter((a) => a % 3 === 2).reverse((a, b) => a + b).join('')
                const arr = [...res, res2, res3].join('')
                array.push(arr)
            } else if (i === 3) {
                const res = a.split("").filter((a) => a % 1 === 0).join('')
                array.push(res)
            }

        }

        return array
    }


    console.log(result(arr1, arr2))


    return (
        <>
        </>
    );
}

export default App;
