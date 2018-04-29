import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDOWC4EQ72yLXG-5Rx1QmvMyhVkuEYkg_4';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>    
    ); 
}

ReactDOM.render(<App />, document.querySelector('.container'));