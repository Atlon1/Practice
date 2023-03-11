import './App.css';
import React from "react";


function App() {


    const arr1 = 6
    // const arr2 = "Good"
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
        if (a > 0){
            let array = ''
            let count = 0
            for (let i = 0; i <= a; i ++){
                count += i
            }
            for (let i = 0; i < a; i ++){
                array +=`${i}+`
            }

            return `${array}${a} = ${count}`
        } else if ( a < 0){
            return `${a}<0`
        } else {
            return 0
        }
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
