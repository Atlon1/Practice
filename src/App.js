import './App.css';
import React from "react";



function App() {


    const arr1 =  [{
        title: "Mr.",
        firstName: "John",
        lastName: "Doe",
        age: 41
    }];
    const arr2 = ["Ala", "Puszek", "Zosia", "Marcin", "Kamil" ]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true




    const result = (a) => {


    }




    return (
        <>
            {arr1.map((elem)=> {
                return (
                    <ul>
                        <li>{elem.firstName}</li>
                        <li>{elem.age}</li>
                        <li>{elem.lastName}</li>
                        <li>{elem.title}</li>
                    </ul>
                )
            })}
        </>
    );
}

export default App;