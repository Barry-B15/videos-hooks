import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'


class App extends React.Component {
    // init the state
    // add a new item selectedVideo to state and set it to null
    state = { videos : [], selectedVideo: null };

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
    // add a callback that will fire when the user clicks a video
    onVideoSelect = (video) => {
        // console.log('From the App', video);
        // replace console log with a setState and pass it the selected video, then creare a new VideoDetail component
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
            // add the callback as props then go add it to SearchBar.js
            <div> 
                <SearchBar onFormSubmit={this.onTermSubmit} /> 
                {/* to show the player and list side by side we need semantic ui built in grid */}
                <div className="ui grid">
                    <div className="ui row">
                        {/* use semantic ui to show player on eleven colns */}
                        <div className="eleven wide column">
                            {/* show the video detail passing it video (not videos as we are passing a single video) */}
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        {/* use semantic ui to show player on five colns */}
                        <div className="five wide column">
                            {/* I have {this.state.videos.length} videos replace this with the ff then go get the props in VideoList*/}
                            {/* add a ref to the callback as a props */}
                            <VideoList onVideoSelect={this.onVideoSelect} videos={ this.state.videos } />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



export default App;