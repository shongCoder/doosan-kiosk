import React, {useEffect, useState} from 'react';
import './OverviewComponent.css'
import Logo from '/img/overview/over-logo.svg'
import BgImage from '/img/overview/overview-back.png'

function OverviewComponent({isOpen}) {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {

        if (!isOpen) return;

        const img = new Image();
        img.src = BgImage;
        img.onload = () => {
            setImageLoaded(true);
        };

    }, [isOpen]);

    useEffect(() => {

        if (!imageLoaded) return;

        const timer = setTimeout(() => {
            setShowContent(true);
        }, 1000);

        return () => clearTimeout(timer);

    }, [imageLoaded]);

    if (!isOpen) return null; // 닫힐 때는 컴포넌트 자체가 없어짐

    return (
        <>
            {isOpen && (
                <div id="overview-wrap"  style={{ backgroundImage: `url(${BgImage})` }}>
                    <div className={`contents ${showContent ? "show" : ""}`}>
                        <h2>Hydrogen Powered Solution Provider</h2>
                        <p>Doosan aims to supply clean energy throughout human daily life by<br />
                            providing eco-friendly power generation<br />
                            and mobility solutions based on hydrogen.<br />
                            Building your tomorrow today !</p>
                        <img src={Logo} alt="DOOSAN Mobility Innovation" />
                    </div>
                    <div className="overlay"></div>
                </div>
            )}
        </>
    );
}

export default OverviewComponent;