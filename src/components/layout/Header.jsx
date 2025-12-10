import React, {useEffect, useState} from 'react';
import "./Header.css"
import Logo from "/doosan-logo.svg"
import BackBtn from "/img/header/back-btn.svg"
import {AnimatePresence, motion} from "framer-motion";

function Header({ title, isBack, onBackClick, isVideo }) {

    return (
        <>
            <div
                id="header"
                style={{
                    borderBottom: isVideo ? "none" : "1px solid rgba(255, 255, 255, 0.08)",
                }}
            >
                {/* 필요할 때만 버튼 노출 */}
                {isBack ? (
                    <motion.button
                        style={{ marginRight: "-4.25rem" }}
                        onClick={onBackClick}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 0.4, ease: "easeOut" }} // 딜레이만 적용!
                    >
                        <img src={BackBtn} />
                    </motion.button>
                ) : (<div style={{width: "80px", marginRight: "-4.25rem"}}></div>)}

                <AnimatePresence mode="wait">
                    {title === "" ?
                        (   <motion.div
                                key="logo"
                                initial={{ opacity: 1 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                    delay: 1.5,
                                    duration: 0.4,
                                    ease: "easeOut"
                                }}
                            >
                                <img src={Logo} />
                            </motion.div>
                        ) : (
                            <motion.h2
                                className="header-title"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0, duration: 0.4, ease: "easeOut" }}
                            >
                                {title}
                            </motion.h2>
                        )}
                </AnimatePresence>
                <div></div>
            </div>
        </>
    );
}

export default Header;