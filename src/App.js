import { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookShelf from './components/BookShelf';
import './style/app.css';

const App = () => {
    const [ searchedSentence, setSearchedSentence ] = useState('power');

    return (
        <div id="mainContainer">
            <SearchBar setSearchedSentence={setSearchedSentence}/>
            <BookShelf searchedSentence={searchedSentence}/>
        </div>
    )
}

export default App;