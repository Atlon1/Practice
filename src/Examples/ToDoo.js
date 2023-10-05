import './App.css';
import React, {useEffect, useState} from "react";


function App() {


    const data = 123
    const arr2 = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40]
    // const arr3 = 'Arizona'
    // const arr4 = 8
    // const arr5 = true
    const [toDo, setToDo] = useState([{
        id: 1,
        text: 'Rzecz do zrobienia',
        isDone: false
    }])

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setToDo([...toDo, {
            id: toDo.length + 1,
            text: text,
            isDone: false
        }])
        setText('')
    }

    console.log(toDo, text)

    const handleChange = (id) => {
        setToDo(toDo.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    isDone: !item.isDone
                }
            } else {
                return item
            }
        }))
    }

    const deleteItem = (id) => {
        const newToDo = toDo.filter(item => item.id !== id)
        setToDo(newToDo)
    }
    return (
        <>
            <form>
                <h2>Twoja lista Zadań</h2>
                <input value={text} onChange={(e) => setText(e.target.value)} type='text'
                       placeholder='np. Zrobić zakupy'/>
                <button onClick={handleSubmit}>Dodaj</button>
            </form>

            <ul>
                {toDo.map((item) => {
                    return (
                        <div key={item.id}>
                            <li style={
                                {
                                    backgroundColor: item.isDone ? 'green' : 'white',
                                }
                            } onClick={() => handleChange(item.id)}>{item.text}</li>
                            <button onClick={deleteItem.bind(this, item.id)}>usun</button>
                        </div>
                    )
                })}
            </ul>
        </>
    );
}

export default App;