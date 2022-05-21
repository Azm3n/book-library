import { useEffect, useState, useId } from 'react';
import '../style/book.css';

const Book = ({ bookDetails, index }) => {
    const [ bookData, setBookData ] = useState(bookDetails);
    const [ usedData, setUsedData ] = useState(null);
    useEffect(() => {
        for (const urls of bookData.resources) {
            if(urls.uri.endsWith('medium.jpg')) {
                setUsedData({ url: urls.uri });
            }
        }
    }, []);

    return (
        <div className="book">
            { usedData !== null ? <img src={usedData.url} key={index} height='200px' /> : '' }
        </div>
    )
}

export default Book;