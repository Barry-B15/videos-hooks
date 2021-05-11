import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../apis/youtube'


class App extends React.Component {
    // create a callback to handle form submit
    onTermSubmit = (term) => {
        // console.log(term);
        youtube.get('/search', {
            params: {
                q: term
            }
        });
    };

    render() {
        return (
            // add the callback as props then go add it to SearchBar.js
            <div> <SearchBar onFormSubmit={this.onTermSubmit} /> </div>
        );
    }
}



export default App;