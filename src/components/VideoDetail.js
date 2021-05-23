import React from 'react'

const VideoDetail = ({ video }) => {
    // if statement for when video is null
    if (!video) {
        return<div>Loading...</div>
    }
    // create a const to hold the youtube video source then stick it to the ifram
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return ( 
        <div > 
            <div className="ui embed">
                {/* iframe needs a title, is fixed as {video.snippet.title} but class says it can be "video player" */}
                <iframe src={videoSrc} title="Video Player" />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{ video.snippet.title } </h4>
                <p> {video.snippet.description} </p>    
            </div>
        </div>
    );
}
export default VideoDetail;