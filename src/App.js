import './App.css';
import React,{useState}from "react";


function App() {


    const arr2 = 'Lois Mary Lane'
    // const arr3 = "/"
    // const arr4 = 0
    // const arr5 = 5000

    const [onClick, setOnClick] = useState(false)

    // const result = (a) => {
    //
    // }

    // console.log(result(arr2))


    return (
        <div>
            <div style={
                {
                    width: "100px",
                    height: "100px",
                    background: onClick ? "black" : "yellow"
                }
            }> </div>
            <button onClick={(e =>{setOnClick(!onClick)})}>On</button>
        </div>
    );
}

export default App;
