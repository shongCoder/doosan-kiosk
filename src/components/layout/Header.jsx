import React from 'react';
import "./Header.css"
import Logo from "/doosan-logo.svg"
import BackBtn from "/img/header/back-btn.svg"

function Header({isBack}) {
    return (
        <>
            <div id="header">
                {/* 필요할 때만 버튼 노출 */}
                {isBack ? (
                    <button style={{ marginRight: "-4.25rem" }}>
                        <img src={BackBtn} />
                    </button>
                ) : (<div></div>)}
                <img src={Logo} />
                <div></div>
            </div>
        </>
    );
}

export default Header;