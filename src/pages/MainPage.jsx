import React, {useEffect, useRef, useState} from 'react';
import './MainPage.css'
import ProductRoop from "/img/main/product.webm"
import ArrowTopBtn from "/img/main/top-arrow-button.svg"
import LinkBtn from "/img/main/link-btn.svg"
import Header from "../components/layout/Header";
import VideoComponent from "../components/modals/VideoComponent";
import OverviewComponent from "../components/modals/OverviewComponent";

function MainPage() {
    const [isBack, setIsBack] = useState(false);

    const [isOpenInfo, setIsOpenInfo] = useState(false);
    const [activeNav, setActiveNav] = useState(0);
    const [startAnim, setStartAnim] = useState(false); // 애니메이션

    const navItem1Ref = useRef(null);
    const navItem2Ref = useRef(null);
    const [isOpenVideo, setIsOpenVideo] = useState(false);
    const [isOpenOverview, setIsOpenOverview] = useState(false);

    useEffect(() => {
        if (isOpenInfo) {
            setTimeout(() => setStartAnim(true), 10);
        }
    }, [isOpenInfo]);

    return (
        <>
            <div id="wrapper">
                <Header isBack={isBack} onBackClick={() => {
                    setIsBack(false);
                    setIsOpenVideo(false);
                    setIsOpenOverview(false);
                    setActiveNav(0);
                }} />
                <video className="prod-vedio" muted autoPlay loop>
                    <source src={ProductRoop} type="video/webm" />
                </video>

                {!isOpenInfo ? (
                    <div className="touch-here" onClick={() => setIsOpenInfo(true)}>
                        <div>
                            <img src={ArrowTopBtn} alt="arrow top" />
                        </div>
                        <span>Touch here</span>
                    </div>
                ):(
                    <>
                        <div id="prod-info" className={`fade-bounce-up ${startAnim ? "show" : ""}`}>
                            <div></div>
                            <div>
                                <div className="title">
                                    <span>Major Features</span>
                                    <h1>PEMFC</h1>
                                </div>
                                <div className="contents">
                                    <ul>
                                        <li><span>-</span><span>Operable within minutes</span></li>
                                        <li><span>-</span><span>Load-following operation</span></li>
                                        <li><span>-</span><span>24/7 operation, 365 days a year</span></li>
                                        <li><span>-</span><span>Minimum installation area</span></li>
                                        <li><span>-</span><span>Minimum construction period</span></li>
                                        <li><span>-</span><span>On/Off</span></li>
                                        <li><span>-</span><span>RE100</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Product Information End */}

                        <div id="nav" className={`fade-bounce-up ${startAnim ? "show" : ""}`}>
                            <ul>
                                <li
                                    ref={navItem1Ref}
                                    className={activeNav === 1 ? "active" : ""}
                                    onClick={() => {
                                        setActiveNav(1);
                                        setIsBack(true);
                                        const el = navItem1Ref.current;
                                        if (el) {
                                            el.addEventListener(
                                                "transitionend",
                                                () => setIsOpenVideo(true),
                                                { once: true }
                                            );
                                        }

                                    }}
                                >
                                    <div className="nav-title">
                                        IDC<br />
                                        Emergency<br />
                                        Generator
                                    </div>
                                    <div className="nav-btn">
                                        <img src={LinkBtn} alt="move to page" />
                                    </div>
                                </li>

                                <li
                                    ref={navItem2Ref}
                                    className={activeNav === 2 ? "active" : ""}
                                    onClick={() => {
                                        setActiveNav(2);
                                        setIsBack(true);
                                        const el = navItem2Ref.current;
                                        if (el) {
                                            el.addEventListener(
                                                "transitionend",
                                                () => setIsOpenOverview(true),
                                                { once: true }
                                            );
                                        }

                                    }}
                                >
                                    <div className="nav-title">
                                        Hydrogen<br />
                                        Powered<br />
                                        Solution Provider
                                    </div>
                                    <div className="nav-btn">
                                        <img src={LinkBtn} alt="move to page" />
                                    </div>
                                </li>

                                <li
                                    className={activeNav === 3 ? "active" : ""}
                                    onClick={() => setActiveNav(3)}
                                >
                                    <div className="nav-title">
                                        Major<br />
                                        Features
                                    </div>
                                    <div className="nav-btn">
                                        <img src={LinkBtn} alt="move to page" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* Navigation Buttons End */}
                    </>
                )}
                <VideoComponent isOpen={isOpenVideo}/>
                <OverviewComponent isOpen={isOpenOverview}/>
            </div>
        </>
    );
}

export default MainPage;