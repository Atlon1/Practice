import './App.css';
import React from "react";


function App() {


    const arr1 = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']
    const arr2 = 4
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
       let res = a.filter((elem)=> elem.replace(/[0-9]/g, "")).join('')
       let res2 = a.filter((elem)=> elem.replace(/[a-z]/g, "")).map((elem)=> parseInt(elem))
        let res3 = res2.reduce((a,b)=> a+b)

        return [res3/res2.length, res]
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
