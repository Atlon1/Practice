import './App.css';
import React from "react";


function App() {


    const arr1 = [ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
    const arr2 = 4
    // const arr3 = 0.18
    // const arr4 = 1200
    // const arr5 = true


    const result = (ticket, win) => {
        if(ticket.filter(a => a[0].split('').some(b => b.charCodeAt(0) == a[1])).length >= win)
        {
            return "Winner!";
        }
        return "Loser!";
    }

    console.log(result(arr1,arr2))



    return (
       <>
       </>
    );
}

export default App;
