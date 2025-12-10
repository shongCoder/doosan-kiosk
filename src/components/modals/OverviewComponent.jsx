import React from 'react';
import {motion} from 'framer-motion';
import './OverviewComponent.css'
import Logo from '/img/overview/over-logo.svg'
import BgImage from '/img/overview/overview-back.png'
import {AnimatePresence} from "framer-motion";

function OverviewComponent({isOpen}) {

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    id="overview-wrap"
                    style={{ backgroundImage: `url(${BgImage})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                >
                    <motion.div
                        className="contents"
                        initial={{ opacity: 0, translateY: 20 }}
                        animate={
                            isOpen
                                ? { opacity: 1, translateY: 0 }
                                : { opacity: 0, translateY: 20 }
                        }
                        transition={{
                            delay: 1,
                            duration: 1.2,
                            ease: "easeOut",
                        }}
                    >
                        <h2>Hydrogen Powered Solution Provider</h2>
                        <p>Doosan aims to supply clean energy throughout human daily life by<br />
                            providing eco-friendly power generation<br />
                            and mobility solutions based on hydrogen.<br />
                            Building your tomorrow today !</p>
                        <img className="bottom-logo" src={Logo} alt="DOOSAN Mobility Innovation" />
                    </motion.div>
                    <div className="overlay"></div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default OverviewComponent;