import React from 'react';
import "./Header.css"
import Logo from "/doosan-logo.svg"
import BackBtn from "/img/header/back-btn.svg"
import { motion } from "framer-motion";

function Header({ title, isBack, onBackClick }) {

    return (
        <>
            <div id="header">
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

                {title === "" ?
                    (<img src={Logo} />) : (
                        <motion.h2
                            className="header-title"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 0.4, ease: "easeOut" }}
                        >
                            {title}
                        </motion.h2>
                    )}
                <div></div>
            </div>
        </>
    );
}

export default Header;