import React from 'react';

class Learn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: this.props.address,
            word: {},
            visibleLanguage: "",
            answers: {},
            indicateWrong: false
        }
    }

    fetch = () => {
        fetch('https://polyglot-app-pl.firebaseio.com/'+this.state.address+'.json')
            .then(response => response.json())
            .then(data => {
                data = Object.entries(data).map(([id, obj]) => ({id, ...obj}));
                let word = data[Math.floor(Math.random() * data.length)];
                let languages = Object.keys(word).filter((element) => element !== "id"); // filter
                let visibleLanguage = languages[Math.floor(Math.random() * languages.length)];
                // console.log(languages);
                // console.log(word);
                this.setState({
                    word: word,
                    visibleLanguage: visibleLanguage
                })
            });
    }
    componentDidMount() {
        this.fetch();
    };

    getLanguages = () => {
        // console.log(this.state.word);
        return Object.keys(this.state.word).filter((element) => element !== "id");
    }

    isCorrect = (language) => {
        if (this.state.answers[language] === this.state.word[language]) {
            return true;
        }
        else {
            return false;
        }
    }

    check = (event) => {
        event.preventDefault();
        const allCorrect = Object.keys(this.state.answers).every(this.isCorrect);

        if (allCorrect) {
            this.setState({
                answers: {},
                inidcateWrong: false
            })
            this.fetch();
        }
        else {
            this.setState({
                indicateWrong: true
            });
        }

    }

    show = (event, language) => {
        event.preventDefault();
        this.setState((state) => {
            return {
                answers: { ...state.word, [language]: state.word[language] },
                indicateWrong: false
            }
        })
    }

    onAnswerChanged = (language, newValue) => {
        this.setState((state) => {
            return {
                answers: { ...state.answers, [language]: newValue },
                indicateWrong: false // jeśli któryś jest pusty to disable przycisk
            }
        });
    }

    render() {
        return (
            <div className="form-div">
                <form>
                    {this.getLanguages().sort((lang1, lang2) => {
                        if (lang1 === this.state.visibleLanguage) {
                            return -1;
                        }
                        if (lang2 === this.state.visibleLanguage) {
                            return 1;
                        }
                        return 0;
                    }).map((language) => {
                        if (language === this.state.visibleLanguage) {
                            return (
                                <div className="word-row" key={this.state.word.id + "--" + language}>
                                    <h2 key={this.state.word.id + "-" + language}> {this.state.word[language]} </h2>
                                </div>
                            )
                        } else {
                            let className = "";
                            if (this.state.indicateWrong && !this.isCorrect(language)) {
                                className = "wrong";
                            }
                            return (
                                <div key={this.state.word.id + "-" + language} className="row" >
                                    <div className="col-25">
                                        <label>{language.charAt(0).toUpperCase() + language.slice(1)}:</label>
                                    </div>
                                    <div className="col-75" key={this.state.word.id + "---" + language}>
                                        <input type="text"
                                            className={className}
                                            onChange={(event) => this.onAnswerChanged(language, event.target.value)}
                                            value={this.state.answers[language] || ""}
                                        />
                                    </div>
                                </div>
                            )
                        }
                    })}
                    <div className="button-row">
                        <button className="show" onClick={this.show}>Show</button>
                        <button className="check" onClick={this.check}>Check</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default Learn;