import React, {Fragment, Component} from 'react';
import {withRouter} from "react-router-dom";
import './Product.css'
import {connect} from "react-redux";


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res: {},
        };
    }

    componentWillMount() {
        const {isPreview, products} = this.props;
        if (!isPreview) {
            const page = this.props.match.params.id;
            let result = products.find(x => x.id === +page);
            this.setState({
                res: result,
            });
        }
    }

    render() {
        const {product, isPreview} = this.props;
        let res = this.state.res;
        if (isPreview) {
            return (
                <Fragment>
                    <img src={product.simage} alt={product.name}/>
                    <div className="cont">
                        <h3>Name: {product.name}</h3>
                        <p>Vendor: {product.vendor}</p>
                        <p>RAM: {product.RAM}</p>
                        <p>ROM: {product.ROM}</p>
                        <p>Price: {product.price} $</p>
                    </div>
                </Fragment>
            )
        } else {
            return (
                <div className="soloItem">
                    <img src={res.bimage} alt={res.name}/>
                    <div className="cont">
                        <h3>Name: {res.name}</h3>
                        <p>Vendor: {res.vendor}</p>
                        <p>CPU: {res.CPU}</p>
                        <p>RAM: {res.RAM}</p>
                        <p>ROM: {res.ROM}</p>
                        <p>Size: {res.size}"</p>
                        <p>Back camera: {res.backcam}</p>
                        <p>Front camera: {res.frontcam}</p>}
                        <p>Price: {res.price} $</p>
                    </div>
                </div>
            )
        }
    }
}

const
    mapStateToProps = ({product}) => ({...product});
export default withRouter(connect(mapStateToProps)(Product));