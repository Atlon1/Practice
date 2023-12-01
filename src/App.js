import './App.css';
import React, {useEffect, useState} from "react";

function App() {

    const a = [{
        username: 'David',
        status: 'online',
        lastActivity: 10
    }, {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 22
    }, {
        username: 'Bob',
        status: 'online',
        lastActivity: 104
    }, {
        username: 'reo',
        status: 'online',
        lastActivity: 104
    }]
    const b = 4

    const res = (res) => {
        const status = {
            online : [],
            offline : [],
            away : []
        }

        const sortedStatus = res.map((elem) => {
            if (elem.lastActivity <= 10){
                status.online.push(elem.username)
            } else if (elem.lastActivity <= 22){
                status.offline.push(elem.username)
            } else {
                status.away.push(elem.username)
            }
        })
        return status


    }


    console.log(res(a))

    return (
        <>

        </>

    );
}

export default App;