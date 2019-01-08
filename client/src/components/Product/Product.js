import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import './Product.css'
import {connect} from "react-redux";
import {deleteData} from '../../redux/actions/Action'
import {bindActionCreators} from "redux";
import Helmet from "react-helmet/es/Helmet";


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res: {},
        };
    }

    id = this.props.match.params.id;
    delete = () => {
        deleteData(this.id);
        this.props.history.push('/ProductsList')
    };

    componentWillMount() {
        const {isPreview, products} = this.props;
        if (!isPreview) {
            let result = products.find(x => x.id === +this.id);
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
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>{item.name}</title>
                </Helmet>
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
                    {isPreview ? '' : <button onClick={this.delete}>Delete item</button>}
                    {isPreview ? '' : <button onClick={() => this.props.history.push('/ProductsList')}>Return</button>}
                </div>

            </div>
        )
    }
}

const
    mapStateToProps = ({product}) => ({...product});
const mapDispatchToProps = dispatcher =>
    bindActionCreators(
        {
            deleteData
        },
        dispatcher,
    );
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));