import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';

import {StyledLink, StyledButton} from '../StyledComponent'

import './Header.css';
import {removeName} from "../../redux/actions/Action";
import {bindActionCreators} from "redux";

class Header extends Component {
    deleteName = () => this.props.removeName('');

    render() {
        return (
            <header>
                {this.props.name ?
                    <h1><FormattedMessage id="hiMessage"/> {this.props.name}</h1>
                    : <h1><FormattedMessage id="needLoginMessage"/></h1>
                }
                <select className='langSelect' value={this.props.localeValue} onChange={this.props.changeLang}>
                    <option value='en'>eng</option>
                    <option value='uk'>uk</option>
                </select>
                {this.props.name ? <StyledButton className='logout' onClick={this.deleteName}>
                    <FormattedMessage id='logoutButton'/></StyledButton> : ''}
                <nav>
                    {this.props.name ? '' :
                        <li>
                            <StyledLink exact to="/"><FormattedMessage id='homePage'/>
                            </StyledLink>
                        </li>}
                    <li>
                        <StyledLink to="/ProductsList"><FormattedMessage id='productListPage'/>
                        </StyledLink>
                    </li>
                    {!this.props.name ? '' : <li>
                        <StyledLink to="/new"><FormattedMessage id='newProductPage'/></StyledLink>
                    </li>}
                    <li>
                        <StyledLink to="/main"><FormattedMessage id='mainPage'/></StyledLink>
                    </li>
                    <li>
                        <StyledLink to="/about"><FormattedMessage id='aboutPage'/></StyledLink>
                    </li>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = ({savedValues}) => ({...savedValues});
const mapDispatchToProps = dispatcher =>
    bindActionCreators({removeName}, dispatcher);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));