import React, {useEffect, useState} from 'react';

const BookInfo = ({isbn}) => {

    const [bookInfo, setBookInfo] = useState({});
    const [isAvailable, setIsAvailable] = useState(false);

    useEffect(() => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`)
            .then(res => res.json())
            .then(data => {
                if (data.items.volumeInfo.length > 0) {
                    setBookInfo(data.items[0]);
                    setIsAvailable(true);
                } else {
                    setIsAvailable(false);
                }
            })
            .catch(err => {
                setIsAvailable(false);
                console.log(err);
            })
    },[isbn])

    console.log(bookInfo)
    return (
        <div>
            {isAvailable ? <h1>{bookInfo.title}</h1> : <h1>Brak</h1>}

        </div>
    );
};

export default BookInfo;