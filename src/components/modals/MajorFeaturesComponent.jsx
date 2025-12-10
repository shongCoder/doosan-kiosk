import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';
import './MajorFeaturesComponent.css'
import "@fontsource/tomorrow/700.css";
import PEMFC from "/img/features/PEMFC.png"
import SOFC from "/img/features/SOFC.png"
import WaterCooling from "/img/features/Water-Cooling-type.png"
import AirCooling from "/img/features/Air-Cooling-type.png"
import DS035CCD from "/img/features/DS035CCD.png"
import BottomText from "/img/features/bottom-text.svg"
import DetailComponent from "./features/DetailComponent";
import {AnimatePresence} from "framer-motion";

function MajorFeaturesComponent({isOpen}) {
    const [toggle, setToggle] = useState(0);
    const [product, setProduct] = useState("");

    const [isOpenDetail, setIsOpenDetail] = useState(false);

    const handleToggle = (page) => {
        setToggle(page);
    }

    useEffect(() => {
        if(!isOpen) {
            setToggle(0);
        }
    }, [isOpen]);

    return (
        <>
            <DetailComponent isOpen={isOpenDetail} onClose={() => setIsOpenDetail(false)} product={product} />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        id="feature-wrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                    >
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
                                <div className="contents">
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
                                                        setIsOpenDetail(true);
                                                        setProduct("PEMFC");
                                                    }}
                                                >
                                                    <img src={PEMFC} />
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setIsOpenDetail(true);
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
                                                        setIsOpenDetail(true);
                                                        setProduct("Water Cooling type");
                                                    }}
                                                >
                                                    <img src={WaterCooling} />
                                                </button>
                                                <button
                                                    onClick={() => {
                                                        setIsOpenDetail(true);
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
                                <div className="contents sec">
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
                                                            setIsOpenDetail(true);
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
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default MajorFeaturesComponent;