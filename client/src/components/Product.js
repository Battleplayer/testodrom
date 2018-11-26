import React, {Fragment} from 'react';
import './Product.css'

export default (prod) => {
    return(
        <Fragment>
            <img src={prod.product.simage} alt={prod.product.name}/>
            <div className="cont">
                <h2>Name: {prod.product.name}</h2>
                <p>Vendor: {prod.product.vendor}</p>
                <p>CPU: {prod.product.CPU}</p>
                <p>RAM: {prod.product.RAM}</p>
                <p>ROM: {prod.product.ROM}</p>
                <p>Size: {prod.product.size}"</p>
                <p>Back camera: {prod.product.backcam}</p>
                <p>Front camera: {prod.product.frontcam}</p>
                <p>Price: {prod.product.price} $</p>
            </div>
        </Fragment>
    )
};