import React, {Component} from 'react';
import {NavLink, withRouter} from "react-router-dom";
import {connect} from 'react-redux';

import './Header.css';
import {removeName} from "../../redux/actions/Action";
import {bindActionCreators} from "redux";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        };
    };

    deleteName = () => this.props.removeName('');

    render() {
        return (
            <header>
                <h1>
                    {this.props.name ? `HI, ${this.props.name}` : 'Hello, enter your name!'}
                </h1>
                {this.props.name ? <button className='logout' onClick={this.deleteName}>Logout</button> : ''}
                <nav>
                    <li><NavLink exact activeClassName="selected" to="/">Home</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/ProductsList">ProductsList</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/main">Main</NavLink></li>
                    <li><NavLink activeClassName="selected" to="/about">About</NavLink></li>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = ({savedValues}) => ({...savedValues});
const mapDispatchToProps = dispatcher =>
    bindActionCreators({removeName}, dispatcher,);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));