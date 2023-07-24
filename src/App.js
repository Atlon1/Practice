import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 =[
        { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
        { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
    ];

    const arr3 = 5
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {
        return a.filter((elem) => elem.firstName
                .split('')
                .map(c=>c.charCodeAt(0))
                .reduce((a,b) => a+b)
                % 2 !==0

        )
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
