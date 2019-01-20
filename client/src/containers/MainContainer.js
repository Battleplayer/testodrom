import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Switch, Route, withRouter, Redirect} from "react-router-dom";

import {addName, sendData, storeLocale} from '../redux/actions/Action';
import Home from "../components/Home/Home";
import About from "../components/About";
import Main from "../components/Main";
import Product from "../components/Product/Product";
import ProductsListContainer from "../containers/ProductsListContainer";
import NewProduct from "../components/NewProduct/NewProduct";

class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: props.name,
            locale: props.localeValue
        };

    }

    componentDidUpdate() {
        this.props.storeLocale(this.props.localeValue);
    }

    userNameChangeHandler = ({target: {value}}) =>
        this.setState({
            userName: value,
        });


    storeName = () => this.props.addName(this.state.userName);

    render() {
        const {userName} = this.state;
        const {products, match} = this.props;
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/"
                           render={() => (
                               this.props.name ?
                                   (<Redirect to="/ProductsList"/>)
                                   : (<Home value={userName}
                                            saveName={this.storeName}
                                            onChange={this.userNameChangeHandler}/>
                                   ))}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/main" component={Main}/>
                    <Route exact path="/new"
                           render={() => (
                               this.props.name ?
                                   (<NewProduct
                                       sendDB={this.props.sendData}/>)
                                   : (<Redirect to="/"/>)
                           )}/>
                    <Route exact path="/ProductsList" component={ProductsListContainer}/>
                    <Route exact path='/ProductsList/:id'
                           render={() => (
                               <Product products={products} match={match} isPreview=''/>
                           )}/>
                    <Route render={() => <h1>Page not found </h1>}>
                    </Route>
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
            sendData,
            storeLocale
        },
        dispatcher,
    );

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainContainer));