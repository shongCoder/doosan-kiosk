import React, {useEffect, useRef, useState} from 'react';
import {motion} from 'framer-motion';
import './MainPage.css'
import ProductRoop from "/img/main/product.webm"
import ArrowTopBtn from "/img/main/top-arrow-button.svg"
import LinkBtn from "/img/main/link-btn.svg"
import Header from "../components/layout/Header";
import VideoComponent from "../components/modals/VideoComponent";
import OverviewComponent from "../components/modals/OverviewComponent";
import MajorFeaturesComponent from "../components/modals/MajorFeaturesComponent";

function MainPage() {
    const [isBack, setIsBack] = useState(false);
    const [headerTitle, setHeaderTitle] = useState("");

    /* 애니메이션 상태 */
    const [isOpenInfo, setIsOpenInfo] = useState(false);
    const [activeNav, setActiveNav] = useState(0);
    const [startAnim, setStartAnim] = useState(false);
    const [loop, setLoop] = useState(false);

    /* 네비게이션 상태 */
    const navItem1Ref = useRef(null);
    const navItem2Ref = useRef(null);
    const navItem3Ref = useRef(null);

    /* 팝업 상태 */
    const [isOpenVideo, setIsOpenVideo] = useState(false);
    const [isOpenOverview, setIsOpenOverview] = useState(false);
    const [isOpenFeature, setIsOpenFeature] = useState(false);

    useEffect(() => {
        if (isOpenInfo) {
            setTimeout(() => setStartAnim(true), 10);
        }
    }, [isOpenInfo]);

    return (
        <>
            <div id="wrapper">
                <Header title={headerTitle} isBack={isBack} onBackClick={() => {
                    setIsBack(false);
                    setIsOpenVideo(false);
                    setIsOpenOverview(false);
                    setIsOpenFeature(false);
                    setActiveNav(0);
                    setHeaderTitle("");
                }} />

                <video className="prod-vedio" muted autoPlay loop>
                    <source src={ProductRoop} type="video/webm" />
                </video>

                {!isOpenInfo ? (
                    <motion.div
                        className="touch-here"
                        onClick={() => setIsOpenInfo(true)}
                        animate={{
                            bottom: ["3.75rem", "3.75rem", "5rem", "5rem", "3.75rem"],
                            opacity: [0.6, 0.6, 1, 1, 0.6],
                        }}
                        transition={{
                            duration: 1.2,
                            times: [0, 0.1, 0.35, 0.55, 1],
                            ease: ["easeOut", "easeIn", "easeIn"],
                            repeat: Infinity,
                            repeatDelay: 0.6,
                        }}
                    >
                        <div>
                            <img src={ArrowTopBtn} alt="arrow top" />
                        </div>
                        <span>Touch here</span>
                    </motion.div>
                ):(
                    <motion.div
                        className="info-wrap"
                        initial={{ translateY: 20, opacity: 0 }}
                        animate={startAnim ? { translateY: [20, -10, 0], opacity: [0, 1, 1] } : {}}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut",
                            onComplete: () => setLoop(true)   // 등장 애니 끝나면 루프 시작
                        }}
                    >
                        {loop && (
                            <motion.div
                                id="prod-info"
                                animate={{
                                    opacity: [1, 1, 0, 0, 1],  // 네 단계 흐름
                                }}
                                transition={{
                                    duration: 8.8,
                                    times: [0, 0.454, 0.59, 0.727, 1],
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                }}
                            >
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
                            </motion.div>
                        )}
                        {/* Product Information End */}

                        <div id="nav" className={`fade-bounce-up ${startAnim ? "show" : ""}`}>
                            <ul>
                                <motion.li
                                    ref={navItem1Ref}
                                    className={activeNav === 1 ? "active" : ""}
                                    initial={{ y: 0 }}
                                    animate={activeNav === 1 ? { y: -24 } : { y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.3, -0.28, 0.735, 0.045], // Ease in Back
                                    }}
                                    onClick={() => {
                                        setActiveNav(1);
                                        setIsBack(true);
                                        const el = navItem1Ref.current;
                                        if (el) {
                                            el.addEventListener(
                                                "transitionend",
                                                () => {
                                                    setTimeout(() => {
                                                        setIsOpenVideo(true);
                                                    }, 300);
                                                },
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
                                </motion.li>

                                <motion.li
                                    ref={navItem2Ref}
                                    className={activeNav === 2 ? "active" : ""}
                                    initial={{ y: 0 }}
                                    animate={activeNav === 2 ? { y: -24 } : { y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.3, -0.28, 0.735, 0.045], // Ease in Back
                                    }}
                                    onClick={() => {
                                        setActiveNav(2);
                                        setIsBack(true);
                                        const el = navItem2Ref.current;
                                        if (el) {
                                            el.addEventListener(
                                                "transitionend",
                                                () => {
                                                    setTimeout(() => {
                                                        setIsOpenVideo(true);
                                                    }, 300);
                                                },
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
                                </motion.li>

                                <motion.li
                                    ref={navItem3Ref}
                                    className={activeNav === 3 ? "active" : ""}
                                    initial={{ y: 0 }}
                                    animate={activeNav === 3 ? { y: -24 } : { y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: [0.3, -0.28, 0.735, 0.045], // Ease in Back
                                    }}
                                    onClick={() => {
                                        setActiveNav(3);
                                        setIsBack(true);
                                        setHeaderTitle("Major Features");
                                        const el = navItem3Ref.current;
                                        if (el) {
                                            el.addEventListener(
                                                "transitionend",
                                                () => {
                                                    setTimeout(() => {
                                                        setIsOpenVideo(true);
                                                    }, 300);
                                                },
                                                { once: true }
                                            );
                                        }

                                    }}
                                >
                                    <div className="nav-title">
                                        Major<br />
                                        Features
                                    </div>
                                    <div className="nav-btn">
                                        <img src={LinkBtn} alt="move to page" />
                                    </div>
                                </motion.li>
                            </ul>
                        </div>
                        {/* Navigation Buttons End */}
                    </motion.div>
                )}
                <VideoComponent isOpen={isOpenVideo} />
                <OverviewComponent isOpen={isOpenOverview} />
                <MajorFeaturesComponent isOpen={isOpenFeature} />
            </div>
        </>
    );
}

export default MainPage;