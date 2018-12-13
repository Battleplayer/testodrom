import React from 'react';

import './Home.css'

export default ({value, saveName, onChange}) => {
    console.log(saveName);
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
