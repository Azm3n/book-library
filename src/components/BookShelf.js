import { useEffect, useState } from 'react';
import '../style/bookShelf.css';
import Book from './Book';
import gutenBerg from '../api/gutenBerg';

///api/book/?type=&languages=&title_contains=&description_contains=&downloads_range_min=
//&downloads_range_max=&has_bookshelf=&has_resource_type=&has_agent_type=
//&agent_name_contains=&agent_alias_contains=&agent_webpage_contains=&agent_birth_date_range_min=
//&agent_birth_date_range_max=&agent_death_date_range_min=&agent_death_date_range_max=

const BookShelf = ({ searchedSentence }) => {
    const [ apiData, setApiData ] = useState(null);
    const [ pageNumber, setPageNumber ] = useState(1);
    const [ count, setCount ] = useState(0);
    
    const nextPage = direction => {
        if( direction === 'left' && pageNumber-2 > 0 ) {

            setPageNumber(pageNumber-2);
            return;
        }

        if( direction === 'right' && pageNumber+2 < count ) {

            setPageNumber(pageNumber+2)
            return;
        }

        return;
    }

    useEffect(() => {
        if(apiData !== null) setApiData(null);

        const search = async ( pageIndex ) => {
            const { data } = await gutenBerg.get('/book', {
                params: {
                    title_contains: searchedSentence,
                    page: pageIndex
                }
            });
            setCount(data.count);
            pageIndex % 2 == 1 ? setApiData(data.results) : setApiData(previousState => [...previousState, ...data.results]);
        };

        search(pageNumber);
        search(pageNumber+1);
    }, [searchedSentence, pageNumber]);
    
    return (
        <div id='bookShelfContainer'>
            <div id="books">
                {apiData !== null ? apiData.map((element, index) => { return <Book bookDetails={element} index={index} /> }) : ''}
            </div>
            <div id="buttonsContainer">
                <button class='button' onClick={() => nextPage('left')}>Left</button>
                <button class='button' onClick={() => nextPage('right')}>Right</button>
            </div>
        </div>
    )
}

export default BookShelf;