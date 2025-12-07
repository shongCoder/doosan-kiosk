import React from 'react';
import './MainPage.css'

function MainPage() {
    return (
        <>
            <div id="wrapper">
                <video className="prod-mov" muted autoPlay loop>
                    <source src="/img/product.webm" type="video/webm" />
                </video>
                <div className="touch-here">
                    <button>
                        <img src="/img/top-arrow-icon.svg" />
                    </button>
                    <span>Touch here</span>
                </div>
            </div>
        </>
    );
}

export default MainPage;