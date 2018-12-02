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
        const {products, match} = this.props;

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
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/main" component={Main}/>
                    <Route exact path="/ProductsList" component={ProductsListContainer}/>
                    <Route exact path='/ProductsList/:id'
                           render={() => (
                               <Product products={products} match={match} isPreview=''/>
                           )}/>
                </Switch>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({savedValues, products}) => ({
    ...savedValues,
    ...products
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