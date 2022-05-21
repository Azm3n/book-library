import { useState } from 'react';
import '../style/searchBar.css';

const SearchBar = ({ setSearchedSentence }) => {
    const [ input, setInput ] = useState('');

    const submitHandler = event => {
        event.preventDefault();

        setSearchedSentence(input);
    }

    return (
        <div id='searchBarContainer'>
            <form onSubmit={submitHandler}>
                <input id='inputSearch' type='text' value={input} onChange={(obj) => setInput(obj.target.value)} />
                <input class='button' type='submit'/>
            </form>
        </div>
    )
}

export default SearchBar;