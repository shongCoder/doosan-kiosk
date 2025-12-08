import React, {useEffect, useState} from 'react';
import Video from '/video/DMI-video.mp4'
import './VideoComponent.css'

function VideoComponent({isOpen}) {
    const [visible, setVisible] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => setVisible(false), 400);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    return (
        <>
            {visible && (
                <div id="video-wrap" className={isOpen ? 'fade-in' : 'fade-out'}>
                    <video className="video" src={Video} muted autoPlay loop/>
                    <div className="overlay"></div>
                </div>
            )}
        </>
    );
}

export default VideoComponent;