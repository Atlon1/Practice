import React from 'react';

const SecretStuff = (props) => {
    return (
        <>
            {props.password === props.correctPass ? <>{props.secret}</> : <>Pusto</>}
        </>
    );
};

export default SecretStuff;