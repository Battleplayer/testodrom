import React, {Component} from 'react';
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
        let item;
        if (product === undefined) {
            item = res
        } else item = product;
        return (
            <div className="soloItem">
                {isPreview ? <img src={item.simage} alt={item.name}/> : <img src={item.bimage} alt={item.name}/>}
                <div className="cont">
                    <h3>Name: {item.name}</h3>
                    <p>Vendor: {item.vendor}</p>
                    {isPreview ? '' : <p>CPU: {item.CPU}</p>}
                    <p>RAM: {item.RAM}</p>
                    <p>ROM: {item.ROM}</p>
                    <p>Size: {item.size}"</p>
                    {isPreview ? '' : <p>Back camera: {item.backcam}</p>}
                    {isPreview ? '' : <p>Front camera: {item.frontcam}</p>}
                    <p>Price: {item.price} $</p>
                </div>
            </div>
        )
    }
}

const
    mapStateToProps = ({product}) => ({...product});
export default withRouter(connect(mapStateToProps)(Product));