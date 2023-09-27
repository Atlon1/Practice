import React, {useEffect, useState} from 'react';

const Modal = (props) => {

    const [text, setText] = useState(null)

    useEffect(()=> {
        const timer = setTimeout(()=>{
        setText(<div>{props.heading}</div>)
        },10000)
        return () => clearTimeout(timer)
    },[text])
    return (
        <>{text}</>
    );
};

export default Modal;