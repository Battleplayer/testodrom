import React from 'react';

const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    margin: '0 auto',
    height: '100px',
    justifyContent: 'space-between'
};

export default props => {
    const {value, saveName} = props;
    console.log(props);

    return (
        <div>
            <h1>IT'S HOME</h1>
            <form
                style={formStyle}
                onSubmit={e => {
                    e.preventDefault();
                    saveName();
                }}>
                <label htmlFor="userName">Enter your name
                    <input type="text" id='userName' value={value}/>
                </label>
                <button>Submit name</button>
            </form>
        </div>
    )
}
