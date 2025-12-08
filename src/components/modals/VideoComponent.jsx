import React from 'react';
import Video from '/video/DMI-video.mp4'
import './VideoComponent.css'

function VideoComponent({isOpen}) {
    return (
        <>
            {isOpen && (
                <div id="video-wrap">
                    <video className="video" src={Video} muted autoPlay loop/>
                    <div className="overlay"></div>
                </div>
            )}
        </>
    );
}

export default VideoComponent;