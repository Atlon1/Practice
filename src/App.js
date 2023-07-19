import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 ='1'

    const arr3 = 3
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        if (a <= 1){
            return null
        }
       let even = a.split('').filter((elem) => elem % 2 === 0).map((elem) => parseInt(elem)).reduce((a,b) => a + b)
       let odd = a.split('').filter((elem) => elem % 2 !== 0).map((elem) => parseInt(elem)).reduce((a,b) => a + b)

        return even > odd ? 'Even is greater than Odd' : even === odd ? 'Even and Odd are the same' : 'Odd is greater than Even'
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
