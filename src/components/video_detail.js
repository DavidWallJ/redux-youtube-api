/**
 * Created by david on 5/15/17.
 */


import React from 'react';

// props has been passed down from parent elements
const VideoDetail = ({video}) => {
    // {video} gives us props.video
    // props is passed down from parent

    if(!video){
        return <div>Loading...</div>;
    }

    const {videoId} = video.id;
    // same as 'const videoId = video.id.videoId'

    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe src={url} frameBorder="0" className="embed-responsive-item"></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;

