import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        };
    };

    render() {
        return (
            <div>
                <h1>
                    {this.props.name ? `HI, ${this.props.name}` : 'Hello, enter your name!'}
                </h1>
                <nav>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page1">Page</Link></li>
                    <li><Link to="/main">Main</Link></li>
                    <li><Link to="/about">About</Link></li>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = ({savedValues}) => ({...savedValues});

export default connect(mapStateToProps)(Header);