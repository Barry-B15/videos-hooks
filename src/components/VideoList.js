import React from 'react'
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
    // map over the video list and assign values to a constant renderedList so we can use it later
    const renderedList = videos.map((video) => {
        return <VideoItem video={video} />;
    })
    return ( 
    // <div> { videos.length } </div>
    // replace the above with ff
        <div className="ui relaxed divided list"> { renderedList} </div>

    );
}

export default VideoList