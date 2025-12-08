import React from 'react';
import "./Header.css"
import Logo from "/doosan-logo.svg"
import BackBtn from "/img/header/back-btn.svg"

function Header({ title, isBack, onBackClick }) {
    return (
        <>
            <div id="header">
                {/* 필요할 때만 버튼 노출 */}
                {isBack ? (
                    <button style={{ marginRight: "-4.25rem" }} onClick={onBackClick}>
                        <img src={BackBtn} />
                    </button>
                ) : (<div></div>)}

                {title === "" ?
                    (<img src={Logo} />) : (<h2 className="header-title">{title}</h2>)}


                <div></div>
            </div>
        </>
    );
}

export default Header;