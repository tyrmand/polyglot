import React from 'react';
import Typist from 'react-typist';

const Intro = () => {
    return (
        <div className="intro-div">
            <div className="intro-logo">
                <div className="logo">
                    <h1><span>p</span>olyglot</h1>
                </div>
                <Typist cursor={{ show: false }}>
                    <p>Use polyglot to learn several languages at a time.</p>
                </Typist>
            </div>
            <div className="intro-revolve">
                <div className="intro-revolve-container">
                    <p className="intro-revolve-container-text">Learn</p>
                    <ul className="intro-revolve-container-list">
                        <li className="intro-revolve-container-list-item">English!</li>
                        <li className="intro-revolve-container-list-item">German!</li>
                        <li className="intro-revolve-container-list-item">Spanish!</li>
                        <li className="intro-revolve-container-list-item">Polish!</li>
                    </ul>
                </div>
            </div>
            <div className="intro-learn">
                <h2>Learn</h2>
                <h3>Study your vocabulary</h3>
                {/* <Typist startDelay={1000} cursor={{ show: false }}> */}
                    <p>Face the challenge of randomly drawn sets of words and sentences.</p>
                {/* </Typist> */}
            </div>
            <div className="intro-review">
                <h2>Review</h2>
                <h3>Choose what to review</h3>
                {/* <Typist startDelay={1000} cursor={{ show: false }}> */}
                    <p>Make a decision if you want to review single words and phrases or whole sentences.</p>
                {/* </Typist> */}
            </div>
            <div className="intro-add">
                <h2>Add</h2>
                <h3>Create your own sets of words</h3>
                {/* <Typist startDelay={1000} cursor={{ show: false }}> */}
                    <p>You can easily add new items to your vocabulary lists and create your own sets of words.</p>
                {/* </Typist> */}
            </div>
        </div >
    )
};

export default Intro;