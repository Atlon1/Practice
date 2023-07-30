import './App.css';
import React from "react";


function App() {



    const arr1 = 15
    const arr2 = 15
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a,b) => {
       if (a > 0 && b > 0) return 1
       if (a < 0 && b > 0) return 2
       if (a < 0 && b < 0) return 3
        return 4
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
