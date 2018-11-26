import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {connect} from 'react-redux';

import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        };
    };
    myStyle = {
        fontWeight: "700",
        color: "red"
    };
    render() {
        return (
            <header>
                <h1>
                    {this.props.name ? `HI, ${this.props.name}` : 'Hello, enter your name!'}
                </h1>
                {this.props.name ? <button className='logout' onClick={this.props.remove}>Logout</button> :''}
                <nav>
                    <li><NavLink exact activeStyle={this.myStyle} to="/">Home</NavLink></li>
                    <li><NavLink activeStyle={this.myStyle} to="/ProductsList">ProductsList</NavLink></li>
                    <li><NavLink activeStyle={this.myStyle} to="/main">Main</NavLink></li>
                    <li><NavLink activeStyle={this.myStyle} to="/about">About</NavLink></li>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = ({savedValues}) => ({...savedValues});

export default withRouter(connect(mapStateToProps)(Header));