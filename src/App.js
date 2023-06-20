import './App.css';
import React from "react";


function App() {


    const arr2 = [8,9,10,4,2]
    const arr3 = 23
    // const arr4 = 100
    // const arr5 = 5000


    const result = (a,b) => {
       const sort = a.sort((a,b) => a - b)
        const res2 = sort[0] + sort[1]
        let res = 0

        for (let i = 2; i < a.length; i++){
            if (res2 <= b){
              res += 1
            }
        }
        return res
    }

    console.log(result(arr2,arr3))

    return (
        <div>

        </div>
    );
}

export default App;
