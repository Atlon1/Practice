import './App.css';
import React, {useEffect, useState} from "react";

function App() {

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (progress !== 100) {
            const interval = setInterval(() => {
                setProgress(progress => progress + 1);
            }, 100);
            return () => {
                clearInterval(interval);
            }
        }
    }, [progress]);

    return (
        <>
            {progress === 100 ? <h1>Completed</h1> : (<>
                <div style={
                    {
                        width: '500px',
                        height: '50px',
                        border: '1px solid black',
                        display: 'flex',
                        alignItems: 'center',

                    }
                }>

                    <div style={
                        {
                            width: `${progress}%`,
                            height: '100%',
                            backgroundColor: 'green',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                        }
                    }>
                        <div style={{
                            position: 'absolute',
                            left: '42.5%',
                            top: '',
                        }}>
                            {progress}%
                        </div>
                    </div>


                </div>
            </>) }

        </>


    );
}

export default App;