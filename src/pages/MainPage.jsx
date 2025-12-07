import React from 'react';
import './MainPage.css'
import ProductRoop from "/img/product.webm"
import ArrowTopBtn from "/img/top-arrow-button.svg"
import Header from "../components/layout/Header";

function MainPage() {
    return (
        <>
            <div id="wrapper">
                <Header />
                <video className="prod-vedio" muted autoPlay loop>
                    <source src={ProductRoop} type="video/webm" />
                </video>
                <div className="touch-here">
                    <button>
                        <img src={ArrowTopBtn} />
                    </button>
                    <span>Touch here</span>
                </div>

                <div className="prod-info">
                    <div></div>
                    <div>
                        <div className="title">
                            <span>Major Features</span>
                            <h1>PEMFC</h1>
                        </div>
                        <div className="contents">
                            <div className="back">
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
                </div>
                <div className=""></div>
            </div>
        </>
    );
}

export default MainPage;