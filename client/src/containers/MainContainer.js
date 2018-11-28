import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Switch, Route, withRouter} from "react-router-dom";

import {addName, removeName} from '../redux/actions/Action';
import Home from "../components/Home/Home";
import About from "../components/About";
import Main from "../components/Main";
import Product from "../components/Product/Product";
import ProductsListContainer from "../containers/ProductsListContainer";
import Header from "../components/Header/Header";

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        };
    }

    playerNameChangeHandler = ({target: {value}}) =>
        this.setState({
            name: value,
        });

    storeName = () => this.props.addName(this.state.name);
    deleteName = () => this.props.removeName('');


    render() {
        const {name} = this.state;
        const {products} = this.props;
        return (
            <React.Fragment>
                <Header remove={this.deleteName}/>
                <Switch>
                    <Route exact path="/"
                           render={() => (
                               <Home value={name}
                                     saveName={this.storeName}
                                     onChange={this.playerNameChangeHandler}/>
                           )}/>
                    <Route path="/about" component={About}/>
                    <Route path="/main" component={Main}/>
                    <Route path="/ProductsList" component={ProductsListContainer}/>
                    <Route path="/ProductsList/:id"
                           render={() => (
                               <Product product={products} isPreview=''/>
                           )}/>
                </Switch>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({savedValues}) => ({
    ...savedValues,
});
const mapDispatchToProps = dispatcher =>
    bindActionCreators(
        {
            addName,
            removeName
        },
        dispatcher,
    );

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainContainer));