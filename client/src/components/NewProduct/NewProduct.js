import React, {Component} from 'react';
import {withRouter} from "react-router-dom";
import {StyledInput, StyledForm, StyledButton} from '../StyledComponent';
import Helmet from "react-helmet";
import {FormattedMessage} from 'react-intl';

class NewProduct extends Component {

    onChangeVendorValue = (e) => {
        this.setState({vendor: e.target.value})
    };
    onChangeNameValue = (e) => {
        this.setState({name: e.target.value})
    };
    onChangeCpuValue = (e) => {
        this.setState({CPU: e.target.value})
    };
    onChangeRamValue = (e) => {
        this.setState({RAM: e.target.value})
    };
    onChangeRomValue = (e) => {
        this.setState({ROM: e.target.value})
    };
    onChangeSizeValue = (e) => {
        this.setState({size: e.target.value})
    };
    onChangeSimageValue = (e) => {
        this.setState({simage: e.target.value})
    };
    onChangeBimageValue = (e) => {
        this.setState({bimage: e.target.value})
    };
    onChangePriceValue = (e) => {
        this.setState({price: e.target.value})
    };

    render() {
        const {sendDB} = this.props;
        return (
            <div>
                <StyledForm width={`400`} onSubmit={(e) => {
                    e.preventDefault();
                    sendDB(this.state);
                    this.props.history.push('/ProductsList')
                }}>
                    <label htmlFor="vendor">Enter vendor</label>
                    <StyledInput id="username" name="vendor" type="text" onChange={this.onChangeVendorValue}/>
                    <label htmlFor="name">Enter name</label>
                    <StyledInput id="name" name="name" type="text" onChange={this.onChangeNameValue}/>
                    <label htmlFor="CPU">Enter CPU</label>
                    <StyledInput id="CPU" name="CPU" type="text" onChange={this.onChangeCpuValue}/>
                    <label htmlFor="RAM">Enter RAM</label>
                    <StyledInput type="text" id='RAM' name='RAM' onChange={this.onChangeRamValue}/>
                    <label htmlFor="ROM">Enter ROM</label>
                    <StyledInput type="text" id='ROM' name='ROM' onChange={this.onChangeRomValue}/>
                    <label htmlFor="size">Enter size</label>
                    <StyledInput type="text" id='size' name='size' onChange={this.onChangeSizeValue}/>
                    <label htmlFor="simage">Enter simage</label>
                    <StyledInput type="text" id='simage' name='simage' onChange={this.onChangeSimageValue}/>
                    <label htmlFor="bimage">Enter bimage</label>
                    <StyledInput type="text" id='bimage' name='bimage' onChange={this.onChangeBimageValue}/>
                    <label htmlFor="price">Enter price</label>
                    <StyledInput type="text" id='price' name='price' onChange={this.onChangePriceValue}/>
                    <StyledButton><FormattedMessage id="saveProductButton"/> </StyledButton>
                </StyledForm>
                <FormattedMessage id="newProductPage">
                    {title => <Helmet>
                        <title>{title}</title>
                    </Helmet>}
                </FormattedMessage>
            </div>
        )
    }
}

export default withRouter(NewProduct);