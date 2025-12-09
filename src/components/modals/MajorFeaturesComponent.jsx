import React, {useEffect, useState} from 'react';
import './MajorFeaturesComponent.css'
import "@fontsource/tomorrow/700.css";
import PEMFC from "/img/features/PEMFC.png"
import SOFC from "/img/features/SOFC.png"
import WaterCooling from "/img/features/Water-Cooling-type.png"
import AirCooling from "/img/features/Air-Cooling-type.png"
import DS035CCD from "/img/features/DS035CCD.png"
import BottomText from "/img/features/bottom-text.svg"
import DetailComponent from "./features/DetailComponent";

function MajorFeaturesComponent({isOpen}) {
    const [toggle, setToggle] = useState(0);
    const [visible, setVisible] = useState(isOpen);
    const [displayToggle, setDisplayToggle] = useState(0);
    const [fade, setFade] = useState("fade-in");
    const [product, setProduct] = useState("");

    // 모달
    const [isOpenPemfc, setIsOpenPemfc] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setVisible(true);
        } else {
            const timer = setTimeout(() => setVisible(false), 400);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    const handleToggle = (val) => {
        if (val === toggle) return;

        setFade("fade-out"); // 먼저 기존 콘텐츠를 fade-out

        setTimeout(() => {
            setDisplayToggle(val); // 디졸브 끝난 후 콘텐츠 교체
            setFade("fade-in");    // 새 콘텐츠 fade-in
            setToggle(val);
        }, 350); // CSS 트랜지션 시간과 동일하게
    };

    return (
        <>
            <DetailComponent isOpen={isOpenPemfc} onClose={() => setIsOpenPemfc(false)} product={product} />
            {visible && (
                <div id="feature-wrap" className={isOpen ? 'fade-in' : 'fade-out'}>
                    <div className="overlay">
                        <div className="menu-toggle-box" style={{ fontFamily: "Tomorrow", fontWeight: 700 }}>
                            <div
                                className={`menu-toggle ${toggle === 0 ? "active" : ""}`}
                                onClick={() => handleToggle(0)}
                            >
                                Fuel Cell Sysyems
                            </div>
                            <div
                                className={`menu-toggle ${toggle === 1 ? "active" : ""}`}
                                onClick={() => handleToggle(1)}
                            >
                                Hydrogen Drones
                            </div>
                        </div>
                        {/* Toggle Box */}

                        {toggle === 0 ? (
                            <div className={`contents ${fade}`}>
                                <div className="title-box">
                                    <div className="sub-title">Major Features</div>
                                    <div className="title">Fuel Cell Sysyems</div>
                                </div>
                                {/* Title */}
                                <div className="cont-wrap">
                                    <div className="cont-box">
                                        <div className="cont-title">
                                            <div className="dot" style={{ fontFamily: "Tomorrow", fontWeight: 700 }}>∙</div>
                                            <div className="main" style={{ fontFamily: "Tomorrow", fontWeight: 700 }}>Power Generation</div>
                                            <div className="line">|</div>
                                            <div className="qty">2 Products</div>
                                        </div>
                                        <div className="cont-card">
                                            <button
                                                onClick={() => {
                                                    setIsOpenPemfc(true);
                                                    setProduct("PEMFC");
                                                }}
                                            >
                                                <img src={PEMFC} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsOpenPemfc(true);
                                                    setProduct("SOFC");
                                                }}
                                            >
                                                <img src={SOFC} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="cont-box">
                                        <div className="cont-title">
                                            <div className="dot" style={{ fontFamily: "Tomorrow", fontWeight: 700 }}>∙</div>
                                            <div className="main" style={{ fontFamily: "Tomorrow", fontWeight: 700 }}>Mobility</div>
                                            <div className="line">|</div>
                                            <div className="qty">2 Products</div>
                                        </div>
                                        <div className="cont-card">
                                            <button
                                                onClick={() => {
                                                    setIsOpenPemfc(true);
                                                    setProduct("Water Cooling type");
                                                }}
                                            >
                                                <img src={WaterCooling} />
                                            </button>
                                            <button
                                                onClick={() => {
                                                    setIsOpenPemfc(true);
                                                    setProduct("Air Cooling type");
                                                }}
                                            >
                                                <img src={AirCooling} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ):(
                            <div className={`contents sec ${fade}`}>
                                <div className="title-box">
                                    <div className="sub-title">Major Features</div>
                                    <div className="title">Hydrogen Drones</div>
                                </div>
                                {/* Title */}
                                <div className="cont-wrap">
                                    <div className="cont-box">
                                        <div className="card-wrap">
                                            <div className="cont-title">
                                                <div className="dot" style={{ fontFamily: "Tomorrow", fontWeight: 700 }}>∙</div>
                                                <div className="qty">1 Products</div>
                                            </div>
                                            <div className="cont-card">
                                                <button
                                                    className="sec"
                                                    onClick={() => {
                                                        setIsOpenPemfc(true);
                                                        setProduct("DS035CCD");
                                                    }}
                                                >
                                                    <img src={DS035CCD} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <img className="bottom-text" src={BottomText} />
                </div>
            )}
        </>
    );
}

export default MajorFeaturesComponent;