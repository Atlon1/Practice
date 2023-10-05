import React from 'react';

const AdultStuff = ({number}) => {
    return (
        <div>
            {number >= 18 ? <h1>Adult</h1> : <h1>Not Adult</h1>}
        </div>
    );
};

export default AdultStuff;