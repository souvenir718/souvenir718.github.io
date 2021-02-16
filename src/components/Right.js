import React from 'react';
import './Right.css';
const Right = () => {
    return (
        <div className="right-container">
            <div className="content">
                <div className="category">Education</div>
                <div className="content-desc">
                    <p>2021.03 한국기술교육대학교 졸업</p>
                    <p>2020.07 ~ 2020.12 클라우드를 활용한 MSA 전문가 과정 수료(멀티캠퍼스)</p>
                </div>
            </div>
            <div className="content">
                <div className="category">Skills</div>
                <div className="content-skill">
                    <div>
                        <b>HTML / CSS</b>
                        <span className="skilled">🟥🟥🟥🟥🟥⬜⬜⬜⬜⬜</span>
                    </div>
                    <div>
                        <b>Javascript</b>
                        <span className="skilled">🟥🟥🟥🟥🟥⬜⬜⬜⬜⬜</span>
                    </div>
                    <div>
                        <b>React</b>
                        <span className="skilled">🟥🟥🟥🟥⬜⬜⬜⬜⬜⬜</span>
                    </div>
                    <div>
                        <b>React Native</b>
                        <span className="skilled">🟥🟥🟥⬜⬜⬜⬜⬜⬜⬜</span>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="category">Experience</div>
                <div className="content-desc">
                    <p>2020.12 ~ 이노그리드 전략연구기획부</p>
                </div>
            </div>
            <div className="content">
                <div className="category">Hobby</div>
                <div className="content-hobby">
                    <div>
                        🎾<b>테니스</b>
                    </div>
                    <div>
                        <b>🎻첼로</b>
                    </div>
                    <div>
                        <b>🎤노래</b>
                    </div>
                    <div>
                        <b>🎮게임</b>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Right;
