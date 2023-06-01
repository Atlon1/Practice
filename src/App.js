import './App.css';
import React, {useState} from "react";


function App() {


    const [arr1, setArr1] = useState([1, 2, 3, 4, 5, 6])
    // const arr2 = 25
    // const arr3 = 0
    // const arr4 = 1200
    // const arr5 = true


    const result = (a) => {
    }


    const [tableData, setTableData] = useState([1,2,3,4,5]);
    const [date, setDate] = useState("")

    const handleDelete = (index) => {
        const update = [...tableData]
        update.splice(index, 1)
        setTableData(update)
    };

    const refreshDate = () => {
       setTableData([...tableData, date])
    }


    return (
        <div>
            <input onChange={(e) => setDate(e.target.value)} type='text'/>
            <button onClick={() => refreshDate()}>Dodaj treść</button>
            <ul>
                {tableData.map((value, index) => (
                    <li key={index}>
                        {value}
                        <button onClick={() => handleDelete(index)}>Usuń</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
