import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { Switch, Route,} from "react-router-dom";

import {addName} from '../redux/actions/Action';
import Home from "../components/Home";
import About from "../components/About";
import Main from "../components/Main";
import Page from "../components/Page";

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        };

    }

    playerNameChangeHandler = ({ target: { value } }) =>
        this.setState({
            name: value,
        });

    storeName = () => this.props.name(this.state.name);
    render() {
        const { name } = this.state;
        console.log(name);
        return (
            <Switch>
                <Route exact path="/" component={Home}
                       value={name}
                       onChange={this.playerNameChangeHandler}
                       saveName={this.storeName}/>
                <Route path="/about" component={About}/>
                <Route path="/main" component={Main} />
                <Route path="/page" component={Page}/>
            </Switch>
        )
    }
}


const mapStateToProps = ({savedValues}) => ({
    ...savedValues,
});
const mapDispatchToProps = dispatcher =>
    bindActionCreators(
        {
            addName
        },
        dispatcher,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainContainer);