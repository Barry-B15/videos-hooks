import React from 'react'
import VideoItem from "./VideoItem";

//  destructure onVideoSelect as a props
const VideoList = ({ videos, onVideoSelect }) => {
    // map over the video list and assign values to a constant renderedList so we can use it later
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video} />;
    })
    return ( 
    // <div> { videos.length } </div>
    // replace the above with ff
        <div className="ui relaxed divided list"> { renderedList} </div>

    );
}

export default VideoList