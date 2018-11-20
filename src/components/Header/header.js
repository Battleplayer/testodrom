import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: 'nothing'
        };
    };

    render() {
        return (
            <div>
                <h1>text</h1>
                <p>{this.state.inputValue}</p>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page1">Page1</Link></li>
                    <li><Link to="/main">Main</Link></li>
                    <li><Link to="/about">About</Link></li>
                </nav>
            </div>
        )
    }
}

export default Header;