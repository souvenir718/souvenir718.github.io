import React from 'react';
import './Right.css';
const Right = () => {
    return (
        <div className="right-container">
            <div className="content">
                <div className="category">Education</div>
                <div className="content-desc">
                    <p>2013.03 ~ 2021.03 한국기술교육대학교 컴퓨터공학부 졸업</p>
                    <a href="https://github.com/souvenir718/TIL/blob/master/Certificate/%EB%A9%80%ED%8B%B0%EC%BA%A0%ED%8D%BC%EC%8A%A4%20-%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%EB%A5%BC%20%ED%99%9C%EC%9A%A9%ED%95%9C%20%EB%A7%88%EC%9D%B4%ED%81%AC%EB%A1%9C%EC%84%9C%EB%B9%84%EC%8A%A4%20%EC%95%84%ED%82%A4%ED%85%8D%EC%B2%98%20%EC%A0%84%EB%AC%B8%EA%B0%80%20%EC%96%91%EC%84%B1%EA%B3%BC%EC%A0%95%20%EC%88%98%EB%A3%8C%EC%A6%9D.jpg">
                        2020.07 ~ 2020.12 클라우드를 활용한 MSA 전문가 과정 수료(멀티캠퍼스)
                    </a>
                </div>
            </div>
            <div className="content">
                <div className="category">Experience</div>
                <div className="content-desc">
                    <p>2020.12.14 ~ 이노그리드 전략연구기획부</p>
                </div>
            </div>
            <div className="content">
                <div className="category">Certificate</div>
                <div className="content-desc">
                    <p>
                        2019.11.22{' '}
                        <a href="https://github.com/souvenir718/TIL/blob/master/Certificate/%EA%B8%B0%EC%82%AC%EC%9E%90%EA%B2%A9%EC%A6%9D.jpg">
                            정보처리기사
                        </a>
                    </p>
                    <p>
                        2020.12.04{' '}
                        <a href="https://github.com/souvenir718/TIL/blob/master/Certificate/%EB%A9%80%ED%8B%B0%EC%BA%A0%ED%8D%BC%EC%8A%A4%20-%20%EC%8B%A4%EB%AC%B4%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%201%EB%93%B1.jpg">
                            실무 프로젝트 1등 수상(멀티캠퍼스)
                        </a>
                    </p>
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
                <div className="category">Hobby</div>
                <div className="content-hobby">
                    <div>🎾 테니스</div>
                    <div>🎻 첼로</div>
                    <div>🎤 노래</div>
                    <div>🎮 게임</div>
                </div>
            </div>
        </div>
    );
};

export default Right;
