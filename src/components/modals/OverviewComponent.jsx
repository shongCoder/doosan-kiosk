import React, {useEffect, useState} from 'react';
import './OverviewComponent.css'
import Logo from '/img/overview/over-logo.svg'

function OverviewComponent({isOpen}) {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // 열릴 때 3초 뒤에 show true
            const timer = setTimeout(() => {
                setShowContent(true);
            }, 1000);

            return () => clearTimeout(timer); // cleanup
        } else {
            // 닫힐 때 초기화
            setShowContent(false);
        }
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <div id="overview-wrap">
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