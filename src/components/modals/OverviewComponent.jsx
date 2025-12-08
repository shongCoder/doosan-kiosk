import React, {useEffect, useState} from 'react';
import './OverviewComponent.css'
import Logo from '/img/overview/over-logo.svg'
import BgImage from '/img/overview/overview-back.png'

function OverviewComponent({isOpen}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [showContent, setShowContent] = useState(false);
    const [visible, setVisible] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);

            const img = new Image();
            img.src = BgImage;
            img.onload = () => setImageLoaded(true);

        } else {
            setImageLoaded(false);
            setShowContent(false);
            const timer = setTimeout(() => setVisible(false), 400);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!imageLoaded) return;

        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, [imageLoaded]);

    if (!visible) return null;   // VideoComponent와 동일

    return (
        <>
            {visible && (
                <div id="overview-wrap" className={isOpen ? 'fade-in' : 'fade-out'} style={{ backgroundImage: `url(${BgImage})` }}>
                    <div className={`contents ${showContent ? "show" : ""}`}>
                        <h2>Hydrogen Powered Solution Provider</h2>
                        <p>Doosan aims to supply clean energy throughout human daily life by<br />
                            providing eco-friendly power generation<br />
                            and mobility solutions based on hydrogen.<br />
                            Building your tomorrow today !</p>
                        <img className="bottom-logo" src={Logo} alt="DOOSAN Mobility Innovation" />
                    </div>
                    <div className="overlay"></div>
                </div>
            )}
        </>
    );
}

export default OverviewComponent;