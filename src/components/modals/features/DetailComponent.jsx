import React, {useEffect, useState} from 'react';
import './DetailComponent.css'
import CloseBtn from "/img/features/close-btn.svg"
import FEMFC from "/img/features/PEMFC-detail.png"
import SOFC from "/img/features/SOFC-detail.png"
import WaterCooling from "/img/features/Water-Cooling-type-detail.png"
import AirCooling from "/img/features/Air-Cooling-type-detail.png"
import DS035CCD from "/img/features/DS035CCD-detail.png"
import { motion } from  "framer-motion";
import {AnimatePresence} from "framer-motion";

function DetailComponent({isOpen, onClose, product}) {

    const productImages = {
        "PEMFC": FEMFC,
        "SOFC": SOFC,
        "Water Cooling type": WaterCooling,
        "Air Cooling type": AirCooling,
        "DS035CCD": DS035CCD,
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    id="detail-wrap"
                    key="detail"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1
                    }}
                    exit={{
                        opacity: 0,
                    }}
                    transition={{
                        duration: isOpen ? 0.3 : 0.6,
                        ease: isOpen
                            ? [0.17, 0.67, 0.83, 0.67]
                            : [0.25, 0.25, 0.0, 1.0],
                    }}
                >
                    <div className="detail-box">
                        <div className="detail-header">
                            <div className="title">
                                <div className="sub-title">Specifications</div>
                                <div className="main-title">{product}</div>
                            </div>
                            <button className="close" onClick={onClose}>
                                <img src={CloseBtn} />
                            </button>
                        </div>

                        <div className="detail-body">
                            <img src={productImages[product]} alt={product} />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default DetailComponent;