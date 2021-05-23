import "./VideoItem.css"
import React from 'react'

// destructure onVideoSelect
const VideoItem = ({ video, onVideoSelect }) => {
    return ( 
        //add event listener and call onVideoSelect with video
        <div onClick={() => onVideoSelect(video)} className="video-item item"> 
            <img alt={video.snippet.title} className="image" src={video.snippet.thumbnails.medium.url } />
            <div className="content">
                <div className="header">
                    { video.snippet.title }
                </div>
            </div>
            
        </div>
    );
}

export default VideoItem