import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import './Product.css'
import {connect} from "react-redux";
import {deleteData} from '../../redux/actions/Action'
import {bindActionCreators} from "redux";
import Helmet from "react-helmet/es/Helmet";
import {StyledButton} from '../StyledComponent';
import {FormattedMessage} from 'react-intl';


class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res: {},
        };
    }

    id = this.props.match.params.id;
    deleteProduct = () => {
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
                    {isPreview ? '' :
                        <StyledButton color={`#ee595b`} onClick={this.deleteProduct}><FormattedMessage
                            id="deleteItemButton"/> </StyledButton>}
                    {isPreview ? '' : <StyledButton color={`#ABB8C3`}
                                                    onClick={() => this.props.history.push('/ProductsList')}><FormattedMessage
                        id="returnButton"/> </StyledButton>}
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