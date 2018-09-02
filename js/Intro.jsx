import React from 'react';
import Typist from 'react-typist';

const Intro = () => {
    return (
        <div className="intro-div">
            <div className="intro">
                <div className="intro-container">
                    <p className="intro-container-text">
                        Learn
                    </p>
                    <ul className="intro-container-list">
                        <li className="intro-container-list-item">English!</li>
                        <li className="intro-container-list-item">German!</li>
                        <li className="intro-container-list-item">Spanish!</li>
                        <li className="intro-container-list-item">Polish!</li>
                    </ul>
                </div>
            </div>
            <div className="intro-text">
                <div className="logo">
                    <h1><span>p</span>olyglot</h1>
                </div>
                <Typist cursor={{show: false}}>
                <p>Use polyglot to learn several languages at a time.</p>
                </Typist>
                <h3>Learn</h3>
                <Typist cursor={{show: false}}>
                <p>Face the challenge of randomly drawn sets of words and sentences.</p>
                </Typist>
                <h3>Review</h3>
                <Typist cursor={{show: false}}>
                <p>Choose if you want to review single words and phrases or whole sentences.</p>
                </Typist>             
                <h3>Add</h3>
                <Typist cursor={{show: false}}>
                <p>You can easily add new items to your vocabulary lists and create your own sets of words.</p>
                </Typist>
            </div>
        </div>
    )
};

export default Intro;