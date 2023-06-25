import './App.css';
import React, {useEffect, useState} from "react";


function App() {

    const [light, setLight] = useState(0)
    // const arr2 = "milkshakepizzachickenfriescokeburgerpizzasandwichmilkshakepizza"
    // const arr3 = "/"
    // const arr4 = 0
    // const arr5 = 5000

    useEffect(() => {
        const interval = setInterval(() => {
            switch (light) {
                case 1:
                    setLight(2);
                    break;
                case 0:
                    setLight(1);
                    break;
                case 2:
                    setLight(0);
                    break;
                default:
                    break;
            }
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [light]);


    // const result = (a) => {
    //     return a.replace(/[aeiou]/g, v => v.toUpperCase())
    // }
    //
    // console.log(result(arr2))


    return (
        <div style={
            {
                background: "grey",
                width: "125px",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: '25px'
            }
        }>
            <div style={
                {
                    background: light === 0 ? "green" : "darkgrey",
                    width: "100px",
                    height: "100px",
                    borderRadius: "100%"
                }
            }>
            </div>
            <div style={
                {
                    background: light === 1 ? "orange" : "darkgrey",
                    width: "100px",
                    height: "100px",
                    borderRadius: "100%"
                }
            }>
            </div>
            <div style={
                {
                    background: light === 2 ? "red" : "darkgrey",
                    width: "100px",
                    height: "100px",
                    borderRadius: "100%"
                }
            }>
            </div>
        </div>
    );
}

export default App;
