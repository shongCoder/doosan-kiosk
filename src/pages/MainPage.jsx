import React, {useEffect, useState} from 'react';
import './MainPage.css'
import ProductRoop from "/img/main/product.webm"
import ArrowTopBtn from "/img/main/top-arrow-button.svg"
import LinkBtn from "/img/main/link-btn.svg"
import Header from "../components/layout/Header";

function MainPage() {
    const [isOpenInfo, setIsOpenInfo] = useState(false);
    const [activeNav, setActiveNav] = useState(0);
    const [startAnim, setStartAnim] = useState(false);

    useEffect(() => {
        if (isOpenInfo) {
            setTimeout(() => setStartAnim(true), 10);
        }
    }, [isOpenInfo]);

    return (
        <>
            <div id="wrapper">
                <Header />
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
                                    className={activeNav === 1 ? "active" : ""}
                                    onClick={() => setActiveNav(1)}
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
                                    className={activeNav === 2 ? "active" : ""}
                                    onClick={() => setActiveNav(2)}
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
            </div>
        </>
    );
}

export default MainPage;