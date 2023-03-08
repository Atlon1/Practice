import './App.css';
import React from "react";


function App() {


    const arr1 = [10,20,30]
    // const arr2 = 'Phoenix'
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true


    const result = (a) => {
       let odd = [], even = []
        for (let i = 0; i <= a.length; i++){
            if ( a[i] % 2 === 0){
                even.push(a[i])
            } else {
                odd.push(a[i])
            }
        }
        return [odd, even]

    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
