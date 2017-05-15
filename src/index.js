/**
 * Created by david on 5/15/17.
 */
// this part of react knows how to work with components
import React from 'react';
// this part of react works with the DOM as the name would suggest
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = "AIzaSyCR-TWqDKrtrrw-IW8iBYbxDTsNJ5beE44";

// create a new component.  this component should produce some HTML
// this is a class not an instance
const App = () => {
    // this is actually jsx
    // the () aren't required just common practice for muli-line jsx code
    return (
        <div>
            <SearchBar/>
        </div>
    );
};

// take this component's generated HTML and put it on the page (in the DOM)
// you have to put a jsx < /> around App to make it an instance of App and not pass it the class
// <App /> is the same as <App></App>
ReactDOM.render(<App />, document.querySelector('.container'));