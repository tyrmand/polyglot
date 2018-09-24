import React from 'react';
import {NavLink} from 'react-router-dom'

const activeStyle = {
    borderBottom: "2px solid navy"
};

class Navigation extends React.Component {

    render() {
        return (
            <nav>
            <div className="logo">
                <h1><span>p</span>olyglot</h1>
            </div>
                <ul>
                    <li key='intro'>
                        <NavLink exact to='/' activeStyle={activeStyle}><i className="fas fa-home"></i> Home</NavLink>
                    </li>
                    <li key='learn'>
                        <NavLink exact to='/learn' activeStyle={activeStyle}><i className="fab fa-leanpub"></i> Learn</NavLink>
                    </li>
                    <li key='review'>
                        <NavLink exact to='/review' activeStyle={activeStyle}><i className="fas fa-table"></i> Review</NavLink>
                    </li>    
                    <li key='add'>
                        <NavLink exact to='/add' activeStyle={activeStyle}><i className="fas fa-edit"></i> Add</NavLink>
                    </li>
                </ul>
            </nav>                 
        )
    }
};

export default Navigation;
 