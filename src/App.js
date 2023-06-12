import './App.css';
import React, {useState} from "react";


function App() {


    const arr2 = [45880,27720,61759,61593,77335,44707,85100,80559,67468,61678,87143,93988,33480,23217,88804,27430,598,33815,9406,70858,26019,41035,22382,59102,38986,25309,86254,25200,8563,13311,48499,52337,39791,37994,23486,26400,1700]
    // const arr3 = 132
    // const arr4 = 0
    // const arr5 = true


    const result = (a) => {
        let max = a.sort((a,b) => a - b).reverse().filter((elem,ind,array) => array.indexOf(elem) === ind)

        return a.length >= 2 ? [max[0], max[1]] :
                a.length === 1 ? [max[0]] : []
    }

    console.log(result(arr2))

    return (
        <div>

        </div>
    );
}

export default App;
