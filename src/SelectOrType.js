import React, {useState} from 'react';

const SelectOrType = ({items}) => {

    const [text, setText] = useState(items[0]);
    const [inputText, setInputText] = useState('');
    const [newText, setNewText] = useState('Inne');

    const handleSubmit = (e) => {
        e.preventDefault();
        setNewText(inputText)
    }


    console.log(text)

    return (
        <div>
            <form>
                <select onChange={(e) => setText(e.target.value)}>
                    {items.map(item => <option key={item} value={item}>{item}</option>)}
                    <option value={newText}>{newText}</option>
                </select>
            </form>
            {text === 'Inne' || text === newText ? (
                <div>
                    <input onChange={(e)=>  setInputText(e.target.value)} type='text'/>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
                ) : null}
        </div>
    );
};

export default SelectOrType;