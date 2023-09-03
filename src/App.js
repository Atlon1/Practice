import React, { useState } from "react";
import { CSVLink } from 'react-csv'
import './App.css';

function App() {
    const numberOfRows = 1000;
    const minRandomValue = 1;
    const maxRandomValue = 49;

    const generateRandomNumbers = (numberOfRows) => {
        const uniqueNumbersSet = new Set();
        while (uniqueNumbersSet.size < numberOfRows) {
            const row = [];
            for (let j = 0; j < 6; j++) {
                let num = minRandomValue + Math.floor(Math.random() * (maxRandomValue - minRandomValue + 1));
                row.push(num);
            }
            uniqueNumbersSet.add(row.join());
        }
        return Array.from(uniqueNumbersSet).map(row => row.split(" "));
    };

    const [generatedNumbers, setGeneratedNumbers] = useState([]);

    const generateButton = () => {
        const numbers = generateRandomNumbers(numberOfRows);
        setGeneratedNumbers(numbers);
    };

    return (
        <div>
            <button onClick={generateButton} className='btn btn-primary'>Wygeneruj Listę</button>

            {generatedNumbers.length > 0 && (
                <>
                    <CSVLink data={generatedNumbers} filename={"lottery_numbers.csv"} className='btn btn-success'>Export to CSV</CSVLink>
                    <table>
                        <tbody>
                        {generatedNumbers.map((elem, index) => (
                            <tr key={index}>
                                {elem.map((number, subIndex) => (

                                    <td key={subIndex}>
                                        <div>Losowanie numer {index}</div>
                                        <div>{number}</div>
                                        </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
}

export default App;
