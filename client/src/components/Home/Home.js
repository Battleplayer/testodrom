import React, {Component} from 'react';

import './Home.css'

// export default ({value, saveName, onChange}) => {
class Home extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const {value, saveName, onChange} = this.props;
        return (
            <div>
                <form className="nameForm"
                      onSubmit={e => {
                          e.preventDefault();
                          saveName();
                      }}
                >
                    <label htmlFor="userName">Enter your name
                        <input type="text" id='userName' value={value} onChange={onChange}/>
                    </label>
                    <button>Submit name</button>
                </form>
            </div>
        )
    }
}
export default Home
