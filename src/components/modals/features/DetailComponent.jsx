import React, {useEffect, useState} from 'react';
import './DetailComponent.css'
import CloseBtn from "/img/features/close-btn.svg"
import FEMFC from "/img/features/PEMFC-detail.png"
import SOFC from "/img/features/SOFC-detail.png"
import WaterCooling from "/img/features/Water-Cooling-type-detail.png"
import AirCooling from "/img/features/Air-Cooling-type-detail.png"
import DS035CCD from "/img/features/DS035CCD-detail.png"

function DetailComponent({isOpen, onClose, product}) {
    const [visible, setVisible] = useState(isOpen);

    const productImages = {
        "PEMFC": FEMFC,
        "SOFC": SOFC,
        "Water Cooling type": WaterCooling,
        "Air Cooling type": AirCooling,
        "DS035CCD": DS035CCD,
    };

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
                <div id="detail-wrap" className={isOpen ? 'fade-in' : 'fade-out'}>
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
                        {/* Header */}
                        <div className="detail-body">
                            <img src={productImages[product]} alt={product} />
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default DetailComponent;