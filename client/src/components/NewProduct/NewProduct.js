import React, {Component} from 'react';
import { createHashHistory } from 'history';


class NewProduct extends Component {

    history = createHashHistory();
    onChangeVendor = (e) => {
        this.setState({vendor: e.target.value})
    };
    onChangeName = (e) => {
        this.setState({name: e.target.value})
    };
    onChangeCpu = (e) => {
        this.setState({CPU: e.target.value})
    };
    onChangeRam = (e) => {
        this.setState({RAM: e.target.value})
    };
    onChangeRom = (e) => {
        this.setState({ROM: e.target.value})
    };
    onChangeSize = (e) => {
        this.setState({size: e.target.value})
    };
    onChangeSimage = (e) => {
        this.setState({simage: e.target.value})
    };
    onChangeBimage = (e) => {
        this.setState({bimage: e.target.value})
    };
    onChangePrice = (e) => {
        this.setState({price: e.target.value})
    };

    render() {
        const {sendDB} = this.props;

        return (
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    sendDB(this.state);
                    this.history.goBack();
                     //this.props.history.push('/ProductsList')
                }}>
                    <label htmlFor="vendor">Enter vendor</label>
                    <input id="username" name="vendor" type="text" onChange={this.onChangeVendor}/>
                    <label htmlFor="name">Enter name</label>
                    <input id="name" name="name" type="text" onChange={this.onChangeName}/>
                    <label htmlFor="CPU">Enter CPU</label>
                    <input id="CPU" name="CPU" type="text" onChange={this.onChangeCpu}/>
                    <label htmlFor="RAM">Enter RAM</label>
                    <input type="text" id='RAM' name='RAM' onChange={this.onChangeRam}/>
                    <label htmlFor="ROM">Enter ROM</label>
                    <input type="text" id='ROM' name='ROM' onChange={this.onChangeRom}/>
                    <label htmlFor="size">Enter size</label>
                    <input type="text" id='size' name='size' onChange={this.onChangeSize}/>
                    <label htmlFor="simage">Enter simage</label>
                    <input type="text" id='simage' name='simage' onChange={this.onChangeSimage}/>
                    <label htmlFor="bimage">Enter bimage</label>
                    <input type="text" id='bimage' name='bimage' onChange={this.onChangeBimage}/>
                    <label htmlFor="price">Enter price</label>
                    <input type="text" id='price' name='price' onChange={this.onChangePrice}/>
                    <button>Save Product</button>
                </form>
            </div>
        )
    }
}

export default NewProduct;