import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import youtube from '../apis/youtube'


class App extends React.Component {
    // init the state
    state = { videos : []};

    // create a callback to handle form submit
    // make it async by add async in from of term
    onTermSubmit = async (term) => {
        // console.log(term);
        // await the response
       const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // console log the response
        console.log(response);
        // update the state
        this.setState({ videos: response.data.items })
        
    };

    render() {
        return (
            // add the callback as props then go add it to SearchBar.js
            <div> 
                <SearchBar onFormSubmit={this.onTermSubmit} /> 
                {/* I have {this.state.videos.length} videos replace this with the ff then go get the props in VideoList*/}
                <VideoList videos={ this.state.videos } />
            </div>
        );
    }
}



export default App;