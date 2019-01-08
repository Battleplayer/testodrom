import React from 'react';
import {FormattedMessage} from 'react-intl';

import './Home.css'
import Helmet from "react-helmet/es/Helmet";

export default ({value, saveName, onChange}) => {

    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Time to enter your name</title>
            </Helmet>
            <form className="nameForm"
                  onSubmit={e => {
                      e.preventDefault();
                      saveName();
                  }}
            >
                <label htmlFor="userName"><FormattedMessage id='enter_name'/>
                    <input type="text" id='userName' value={value} onChange={onChange}/>
                </label>
                <button><FormattedMessage id='submit_name'/></button>
            </form>
        </div>
    )
}