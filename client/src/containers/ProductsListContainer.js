import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {fetchData} from '../redux/actions/Action';
import {bindActionCreators} from 'redux';

import {Link} from 'react-router-dom'

import Product from '../components/Product/Product';
import './ProductsListContainer.css'

class ProductsListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };

    }

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const {products, error} = this.props;
        return (
            <div>
                <ul>
                    {products && products.map(prod => (
                        <li key={prod.id}>
                            <Link to={`/ProductsList/${prod.id}`}>
                                <Product product={prod} id = {prod.id} isPreview='1'/>
                            </Link>
                        </li>
                    ))}
                </ul>
                {error}
            </div>
        )
    }
}


const mapStateToProps = store => {
    const {products} = store;
    return products;
};
const mapDispatchToProps = dispatcher =>
    bindActionCreators(
        {
            fetchData
        },
        dispatcher,
    );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer));
