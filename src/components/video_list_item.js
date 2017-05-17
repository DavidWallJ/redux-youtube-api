/**
 * Created by david on 5/15/17.
 */
import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // argument 'video' above = 'const video = props.video'
    // another way of pulling these things off of props
    // es6
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img src={imageUrl} alt="" className="media-object"/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{videoTitle}</div>
                </div>
            </div>

        </li>
    )
};

export default VideoListItem;