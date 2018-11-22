import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { addName } from './redux/actions/Action';

class Events extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
        };
    }
    storeName = () => this.props.name(this.state.name);
}


const mapStateToProps = ({ savedValues }) => ({
    ...savedValues,
});
const mapDispatchToProps = dispatcher =>
    bindActionCreators(
        {
            addName
        },
        dispatcher,
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Events);