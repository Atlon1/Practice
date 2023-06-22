import './App.css';
import React from "react";


function App() {


    const arr2 = 323500
    // const arr3 = "/"
    // const arr4 = 0
    // const arr5 = 5000


    const result = (a) => {
      let h = Math.floor(a /3600)
        let m = Math.floor(a % 3600 / 60)
        return `${h} hour(s) and ${m} minute(s)`
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
