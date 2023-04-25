import './App.css';
import React from "react";


function App() {


    const arr1 = ["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]
    // const arr2 = '222'
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
       let bag = []

        for (let i = 0;i < a.length;i++){
            if (a[i] ===  "Barbie doll" || a[i] === "Hello Kitty" ){
                bag.push(a[i])
            } else continue
            if (bag.length ===3){
                break
            }
        }
        return bag
    }


    console.log(result(arr1))


    return (
        <>
        </>
    );
}

export default App;
