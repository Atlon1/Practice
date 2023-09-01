import './App.css';
import React from "react";


function App() {



    const arr1 = "Alaalalalalalalaala fwdfsdfsd"
    const arr2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    const arr3 = 3
    // const arr4 = 1200
    // const arr5 = true



    const result = (a, b, c) => {
        const res = [...a].map((elem)=> elem.toLowerCase())
        const count = {}

        for (let i = 0; i < res.length; i++){
            if (res[i].match(/[a-z]/i)){
                if (count[res[i]]){
                    count[res[i]]++
                } else  {
                    count[res[i]] = 1
                }

            }
        }

        return count
    }

    console.log(result(arr1,arr2))


    return (
        <>
        </>
    );
}

export default App;
