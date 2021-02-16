import React from 'react';
import './Right.css';
const Right = () => {
    return (
        <div className="right-container">
            <div className="content">
                <span className="category">Education</span>
                <div className="content-desc">
                    <p>2021.03 한국기술교육대학교 졸업</p>
                    <p>2020.07 ~ 2020.12 클라우드를 활용한 MSA 전문가 과정 수료(멀티캠퍼스)</p>
                </div>
            </div>
            <div className="content">
                <span className="category">Skills</span>
                <div className="content-desc"></div>
            </div>
            <div className="content">
                <span className="category">Hobby</span>
                <div className="content-desc"></div>
            </div>
            <div className="content">
                <span></span>
            </div>
        </div>
    );
};

export default Right;
