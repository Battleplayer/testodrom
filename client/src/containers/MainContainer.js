import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Switch, Route, withRouter} from "react-router-dom";

import {addName, addProduct} from '../redux/actions/Action';
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
            name: props.name,
        };

    }

    playerNameChangeHandler = ({target: {value}}) =>
        this.setState({
            userName: value,
        });

    newProductHandler = () => this.props.addProduct(this.state.newProduct);

    storeName = () => this.props.addName(this.state.userName);

    render() {
        const {userName} = this.state;
        const {products, match} = this.props;

        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/"
                           render={() => (
                               <Home value={userName}
                                     saveName={this.storeName}
                                     onChange={this.playerNameChangeHandler}/>
                           )}/>
                    <Route exact path="/about" component={About}/>
                    <Route exact path="/main" component={Main}/>
                    <Route exact path="/new" component={NewProduct}
                           onSubmit={this.newProductHandler}
                    />
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

const mapStateToProps = ({savedValues, products, newProduct}) => ({
    ...savedValues,
    ...products,
    ...newProduct
});
const mapDispatchToProps = dispatcher =>
    bindActionCreators(
        {
            addName,
            addProduct
        },
        dispatcher,
    );

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainContainer));