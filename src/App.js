import './App.css';
import React from "react";


function App() {


    const arr1 = ["0","1","2","3","a","b"]
    const arr2 = 4
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {

        const even = a.filter((elem) => elem.replace(/[a-z]/g, "")).filter((elem) => elem % 2 !== 0).length
        const odd = a.filter((elem) => elem.replace(/[a-z]/g, "")).filter((elem) => elem % 2 === 0).length


        return even - odd
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
