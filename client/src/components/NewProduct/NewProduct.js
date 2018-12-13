import React, {Component} from 'react';
import {addProduct} from "../../redux/actions/Action";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";


class NewProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            vendor: '',
            name: '',
            CPU: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addProduct(this.state);
    };

    onChangeVendor = (e) => {
        this.setState({vendor: e.target.value});
    };
    onChangeName = (e) => {
        this.setState({name: e.target.value});
    };
    onChangeCpu = (e) => {
        this.setState({CPU: e.target.value});
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="username">Enter vendor</label>
                    <input id="username" name="vendor" type="text"
                           onChange={this.onChangeVendor}
                    />

                    <label htmlFor="name">Enter name</label>
                    <input id="name" name="name" type="text"
                           onChange={this.onChangeName}/>

                    <label htmlFor="CPU">Enter CPU</label>
                    <input id="CPU" name="CPU" type="text"
                           onChange={this.onChangeCpu}/>

                    <button>Send data!</button>
                </form>
                {/*<form onSubmit={this.handleSubmit}>*/}
                {/*<label htmlFor="vendor">Enter vendor</label>*/}
                {/*<input type="text" id='vendor' name='vendor' />*/}
                {/*<label htmlFor="name">Enter name</label>*/}
                {/*<input type="text" id='name' name='name' />*/}
                {/*<label htmlFor="CPU">Enter CPU</label>*/}
                {/*<input type="text" id='CPU' name='CPU' />*/}
                {/*<label htmlFor="RAM">Enter RAM</label>*/}
                {/*<input type="text" id='RAM' name='RAM'/>*/}


                {/*<button>Save Product</button>*/}
                {/*</form>*/}
            </div>
        )
    }
}

const mapStateToProps = ({newProduct}) => ({
    ...newProduct
});
const mapDispatchToProps = dispatcher =>
    bindActionCreators(
        {
            addProduct
        },
        dispatcher,
    );


export default connect(mapStateToProps, mapDispatchToProps)(NewProduct);