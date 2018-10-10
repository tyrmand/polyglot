import React from 'react';

class Add extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: this.props.address,
            polish: "",
            english: "",
            german: "",
            spanish: ""
        }
    }

    addPolish = (event) => {
        this.setState({
            polish: event.target.value
        })
    };

    addEnglish = (event) => {
        this.setState({
            english: event.target.value
        })
    };

    addGerman = (event) => {
        this.setState({
            german: event.target.value
        })
    };

    addSpanish = (event) => {
        this.setState({
            spanish: event.target.value
        })
    };

    click = (event) => {
        event.preventDefault();

        var newWord = {
            polish: this.state.polish,
            english: this.state.english,
            german: this.state.german,
            spanish: this.state.spanish
        }
        if( this.state.polish !== "" &&
            this.state.english !== "" &&
            this.state.german !== "" &&
            this.state.spanish !== "") {
                fetch('https://polyglot-app-pl.firebaseio.com/'+this.state.address+'.json', {
                    method: 'POST',
                    body: JSON.stringify(newWord),
                    headers: { "Content-Type": "application/json" }
                })
                    .then(resp => resp.json())
                    .then(
                        this.setState({
                            polish: "",
                            english: "",
                            german: "",
                            spanish: "",
                    }))
            }
    }

    render() {
        return (
            <div className="form-div">
                <form>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="polish">Polish:</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="polish" value={this.state.polish} onChange={this.addPolish}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="english">English:</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="english" value={this.state.english} onChange={this.addEnglish}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="german">German:</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="german" value={this.state.german} onChange={this.addGerman}></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label htmlFor="spanish">Spanish:</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="spanish" value={this.state.spanish} onChange={this.addSpanish}></input>
                        </div>
                    </div>
                    <div className="button-row">
                        <button className="add" onClick={this.click}>Add</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Add;
