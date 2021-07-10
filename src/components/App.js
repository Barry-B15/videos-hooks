import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'

// 2. Declare a new App func
const App = () => {
    // 3. Declare 2 pieces of state corresponding to the params in the old App state {video:[], selectedVideo:null}
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    // 4 declare a useEffect with an empty array as this func will run only once when the app 1st loads. Then cut n paste the content of componentDidMount. Note useEffect n componentDidMount are equivalent. they handle our app life cycle. make sure to remove this. in front of ontermSubmit
    useEffect(() => {
        onTermSubmit('beautiful japan')
    }, []);

    //5. cut a paste the onTermSubmit callback here, add const in front of onTermSubmit to make it a func, check n remove any "this."
    const onTermSubmit = async(term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });
        // update the state
        // split the setState() into 2, one for setVideo response, one for setSelectedVideo response
        // setState({
        //     videos: response.data.items,
        //     selectedVideo: response.data.items[0]
        // })
        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);
    };
    //6 cut n paste the onVideoSelect callback here to fire when the user clicks a video
    // add const in front of onVideoSelect
    const onVideoSelect = (video) => {
            // replace this line as ff and prodie it with the video we want to select
            // this.setState({ selectedVideo: video });
            setSelectedVideo(video);
        }
        // 7. cut the entire return() part of render(), past here
    return (
        // add the callback as props then go add it to SearchBar.js
        <div>
            <SearchBar onFormSubmit = { onTermSubmit } />  
             
            <div className = "ui grid">
                <div className = "ui row"> 
                   
                    <div className = "eleven wide column"> 
                        
                        <VideoDetail video = { selectedVideo } />  
                    </div> 
                    
                    <div className = "five wide column" > 
                        
                        <VideoList 
                        onVideoSelect = { onVideoSelect } 
                        videos = { videos } /> 
                    </div> 
                </div> 
            </div > 
        </div>
    );
};

export default App;