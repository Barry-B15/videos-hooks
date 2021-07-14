import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'



const App = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    // destructure and call the custom hook using same syntax as use state
    const [videos, search] = useVideos('beautiful japan');

    // to select the 1st video in the list use useEffect and pass videos as an arg to the array [videos]
    useEffect(() => {
        setSelectedVideo(videos[0]); // select the 1st video in list of videos
    }, [videos]);
//setSelectedVideo(response.data.items[0]);
// this was how we selected b4 in onTermSubmit
    
        
    return (
        
        <div>
            {/* update onTermSubmit to 'search', we chnaged this name in the hook */}
            <SearchBar onFormSubmit = { search } />  
             
            <div className = "ui grid">
                <div className = "ui row"> 
                   
                    <div className = "eleven wide column"> 
                        
                        <VideoDetail video = { selectedVideo } />  
                    </div> 
                    
                    <div className = "five wide column"> 
                        <VideoList 
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