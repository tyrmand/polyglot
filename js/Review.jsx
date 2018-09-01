import React from 'react';

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: this.props.address,
            rows: []
        }
    }
    componentDidMount() {
        const address = this.state.address;

        fetch('https://polyglot-app-pl.firebaseio.com/'+this.state.address+'.json')
            .then(response => response.json())
            .then(data => {
                let rows = Object.entries(data).map(([id, element]) => {
                    return (
                        <tr key={id}>
                            <td>{element.polish}</td>
                            <td>{element.english}</td>
                            <td>{element.german}</td>
                            <td>{element.spanish}</td>
                        </tr>
                    )
                });

                this.setState({
                    rows: rows
                });
            })
    };

    render() {

        console.log("rendering", this.props);

        return (
            <div className="table-div">
                <table>
                    <thead>
                        <tr>
                            <th>Polish</th>
                            <th>English</th>
                            <th>German</th>
                            <th>Spanish</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.rows}
                    </tbody>
                </table>
            </div>
        )

    }
};

export default Review;