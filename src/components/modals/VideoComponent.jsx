import React from 'react';
import {motion} from 'framer-motion';
import Video from '/video/DMI-video.mp4'
import './VideoComponent.css'
import {AnimatePresence} from "framer-motion";

function VideoComponent({isOpen}) {

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    id="video-wrap"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                >
                    <video className="video" src={Video} muted autoPlay loop />
                    <div className="overlay"></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default VideoComponent;