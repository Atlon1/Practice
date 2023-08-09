import './App.css';
import React from "react";


function App() {


    const arr1 = "WXGG klOL"
    const arr2 = 2
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
       return a.length <= b ? `${a}` : a.length <= 4 ? `${a.slice(0,(b - a.length ))}...` :`${a.slice(0,(b - a.length - 3 ))}...`

    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
