import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const arr2 =[[1,2],[3,4],[5,6]]

    const arr3 = "number"
    const arr4 = 5
    // const arr5 = 5000




    const result = (a,b,c) => {


        return [].concat(...a).sort((a,b) => b -a).join(">")
    }

    console.log(result(arr2,arr3,arr4))


    return (
       <>
       </>
    );
}

export default App;
