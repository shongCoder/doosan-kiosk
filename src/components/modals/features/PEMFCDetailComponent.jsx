import React, {useEffect, useState} from 'react';
import './DetailComponent.css'
import CloseBtn from "/img/features/close-btn.svg"
import Detail from "/img/features/PEMFC-detail.png"

function PEMFCDetailComponent({isOpen, onClose}) {

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
                <div id="detail-wrap" className={isOpen ? 'fade-in' : 'fade-out'}>
                    <div className="detail-box">
                        <div className="detail-header">
                            <div className="title">
                                <div className="sub-title">Specifications</div>
                                <div className="main-title">PEMFC</div>
                            </div>
                            <button className="close" onClick={onClose}>
                                <img src={CloseBtn} />
                            </button>
                        </div>
                        {/* Header */}
                        <div className="detail-body">
                            <img src={Detail} />
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default PEMFCDetailComponent;