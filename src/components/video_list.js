/**
 * Created by david on 5/15/17.
 */
import React from 'react';
import VideoListItem from './video_list_item';

// VideoList will receive 'props' from it's parent App class where it's being called.  I think.
const VideoList = (props) => {
    const VideoItems = props.videos.map((video) => {
        // passing video from const VideoList to const VideoListItem
        // lists in React should have a unique key so that React can easily dynamically update the li's value without updating the whole ul or element
        // the etag is part of the object from the youtube api.  essentially an id
        return (
            // these are items we're passing down from
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key={video.etag}
                video={video}/>
        );
    });

    return (
        // have to use className instead of class in jsx
        <ul className="col-md-4 list-group">
            {VideoItems}
        </ul>
    )
};

export default VideoList;