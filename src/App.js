import './App.css';
import React from "react";


function App() {


    const arr2 = 'Lois Mary Lane'
    // const arr3 = "/"
    // const arr4 = 0
    // const arr5 = 5000


    const result = (a) => {
        let res = a.split(' ')
        let res2 = ""

        for (let i = 1; i < res.length - 1; i++) {
            res2 += res[i].slice(0, 1) + ". "
        }

        if (res.length <= 1) {
            return `${res[0]}`
        } else if (res.length <= 2){
            return `${res[0]} ${res[res.length - 1]}`
        }

        return `${res[0]} ${res2}${res[res.length - 1]}`
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
