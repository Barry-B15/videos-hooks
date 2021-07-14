import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'



const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

//setSelectedVideo(response.data.items[0]);
    
        
    return (
        
        <div>
            <SearchBar onFormSubmit = { onTermSubmit } />  
             
            <div className = "ui grid">
                <div className = "ui row"> 
                   
                    <div className = "eleven wide column"> 
                        
                        <VideoDetail video = { selectedVideo } />  
                    </div> 
                    
                    <div className = "five wide column"> 
                        <VideoList 
                        //1. rather than provide a separate func, we should make it an inline func
                        // onVideoSelect = { onVideoSelect } 
                        // onVideoSelect = {(video) => setSelectedVideo(video) }

                        //2. again notice that we are providing one agr (video) and providing the same arg to setSelectedVideo(video) in our func. Anytime we set something like this in the same order it is a sign that we should do a little refactor
                        // we can simply replace this func with this. It is 100% equiv to what we had b4
                            onVideoSelect={setSelectedVideo}
                            videos={videos} 
                        /> 
                    </div> 
                </div> 
            </div > 
        </div>
    );
};

export default App;