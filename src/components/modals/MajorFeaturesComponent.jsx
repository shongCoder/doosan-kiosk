import React, {useEffect, useState} from 'react';
import './MajorFeaturesComponent.css'
import "@fontsource/tomorrow/700.css";

function MajorFeaturesComponent({isOpen}) {
    const [toggle, setToggle] = useState(0);
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
                <div id="feature-wrap" className={isOpen ? 'fade-in' : 'fade-out'}>
                    <div className="overlay">
                        <div className="menu-toggle-box" style={{ fontFamily: "Tomorrow", fontWeight: 700 }}>
                            <div
                                className={`menu-toggle ${toggle === 0 ? "active" : ""}`}
                                onClick={() => setToggle(0)}
                            >
                                Fuel Cell Sysyems
                            </div>
                            <div
                                className={`menu-toggle ${toggle === 1 ? "active" : ""}`}
                                onClick={() => setToggle(1)}
                            >
                                Hydrogen Drones
                            </div>
                        </div>
                        {/* Toggle Box */}

                        {toggle === 0 ? (
                            <div className="contents">
                                <div className="title-box">
                                    <div className="sub-title">Major Features</div>
                                    <div className="title">Fuel Cell Sysyems</div>
                                </div>
                            </div>
                        ):(
                            <div>ddfdsf</div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default MajorFeaturesComponent;