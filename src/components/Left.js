//rsc

import React from 'react';
import './Left.css';

const Left = () => {
    return (
        <div className="left-container">
            <div className="top">
                <div className="introduce">
                    <p className="greeting">안녕하세요.</p>
                    <p className="greeting">
                        <span className="name">김수빈</span>입니다.
                    </p>
                    <div className="line"></div>
                    <div className="desc">
                        <p>
                            언제나, 어디서나 <b>다양한 경험</b>을 얻고 즐겁게 일할 수 있는 유연한 <b>FE 개발자</b>가 되겠습니다. 😎
                        </p>
                    </div>
                </div>
            </div>
            <div className="contactme">
                <div className="name-en">Kim Su Bin</div>
                <div className="birth">1994.07.18</div>
                <div className="line" />
                <div className="contact-info">
                    <p>Tel : 010-3595-0104</p>
                    <p>E-mail : mongkey0@naver.com</p>
                    <a href="https://github.com/souvenir718">Github : souvenir718</a>
                </div>
            </div>
        </div>
    );
};

export default Left;
