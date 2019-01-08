import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {fetchData} from '../redux/actions/Action';
import {bindActionCreators} from 'redux';

import {Link} from 'react-router-dom'

import Product from '../components/Product/Product';
import './ProductsListContainer.css'
import Helmet from "react-helmet/es/Helmet";
import {FormattedMessage} from 'react-intl';

class ProductsListContainer extends Component {

    componentDidMount() {
        // if (this.props.isRequestInProgress === !this.props.isRequestInProgress) {

        this.props.fetchData();
        // }
    }

    render() {
        const {products, error} = this.props;
        return (
            <div>
                <ul>
                    {products && products.map(prod => (
                        <li key={prod.id}>
                            <Link exact="true" to={`/ProductsList/${prod.id}`}>
                                <Product product={prod} id={prod.id} isPreview='1'/>
                            </Link>
                        </li>
                    ))}
                </ul>
                {error}
                <FormattedMessage id="productlisttitle">
                    {title => <Helmet>
                        <title>{title}</title>
                    </Helmet>}
                </FormattedMessage>
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
