import React from 'react';

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
                <h3>Bla bla bla</h3>
                <p>Use polyglot to learn several languages at a time.</p>
                <h3>Learn</h3>
                <p>Face the challenge of randomly drawn sets of words and sentences.</p>
                <h3>Review</h3>
                <p>Choose if you want to review single words and phrases or whole sentences.</p>
                <h3>Add</h3>
                <p>You can easily add new items to your vocabulary lists and create your own sets of words.</p>
            </div>
        </div>
    )
};

export default Intro;