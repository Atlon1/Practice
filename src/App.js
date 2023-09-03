import './App.css';
import React, {useState} from "react";


function App() {


    const arr1 = 100
    const arr2 = 3
    const arr3 = 1
    // const arr4 = 1200
    // const arr5 = true


    const result = (a, b, c) => {
        let res = []
        let min = 1
        let max = 49
        for (let i = 0; i < a; i++) {
            const row = []
            for (let j = 0; j < 6; j++) {
                let num = min + Math.floor((max - min) * Math.random())
                row.push(num)
            }
            res.push(row)
        }
        return res.filter((item, index, arr) => arr.indexOf(item) === index)

    }

    const [generateNumbers, setGenerateNumbers] =useState([])


    const genertateButton = () =>{
        const number = result(arr1)
        setGenerateNumbers(number)
    }
    return (
     <div>
         <button onClick={genertateButton}>Wygeneruj Liste</button>
         {generateNumbers.length > 0 && (
             <ul>
                 {generateNumbers.map((elem, index) => (
                     <li key={index}>
                         {elem.join(', ')}
                     </li>
                 ))}
             </ul>
         )}
     </div>
    );
}

export default App;
