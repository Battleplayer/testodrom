import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import axios from 'axios';
import {Link, Route} from 'react-router-dom'

import Product from '../components/Product';
import './ProductsListContainer.css'

class ProductsListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3001/productslist").then(resp => {
                let result = resp.data.productslist;
                this.setState({
                    products: result
                });
            });
    }

    render() {
        const {products } = this.state;
        return (
            <div>
                    <ul>
                        {products && products.map(prod => (
                        <li key={prod.id}>
                            <Link to={prod.id} >
                                <Product product={prod}/>
                            </Link>
                            <Route path="/about" component={Product}/>

                        </li>
                        ))}
                    </ul>

            </div>
        )
    }
}


const mapStateToProps = ({savedValues}) => ({
    ...savedValues,
});


export default withRouter(connect(mapStateToProps)(ProductsListContainer));
