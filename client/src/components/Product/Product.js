import React, {Fragment} from 'react';
import {withRouter} from "react-router-dom";
import './Product.css'

const Product = ({product,id, isPreview}) => {
    console.log(id);
    return (
        <Fragment>
            {isPreview ? <img src={product.simage} alt={product.name}/> :
                <img src={product.bimage} alt={product.name}/>}
            <div className="cont">
                <h3>Name: {product.name}</h3>
                <p>Vendor: {product.vendor}</p>
                {isPreview ? '' : <p>CPU: {product.CPU}</p> }
                <p>RAM: {product.RAM}</p>
                <p>ROM: {product.ROM}</p>
                {isPreview ? '' : <p>Size: {product.size}"</p>}
                {isPreview ? '' : <p>Back camera: {product.backcam}</p>}
                {isPreview ? '' : <p>Front camera: {product.frontcam}</p>}
                <p>Price: {product.price} $</p>
            </div>
        </Fragment>
    )
};
export default withRouter(Product);