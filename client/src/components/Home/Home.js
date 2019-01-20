import React from 'react';
import {FormattedMessage} from 'react-intl';

import Helmet from "react-helmet/es/Helmet";

import {StyledInput, StyledForm, StyledButton} from '../StyledComponent'

export default ({value, saveName, onChange}) => {

    return (
        <div>
            <Helmet>
                <title>Time to enter your name</title>
            </Helmet>
            <StyledForm
                onSubmit={e => {
                    e.preventDefault();
                    saveName();
                }}
            >
                <label htmlFor="userName"><FormattedMessage id='enter_name'/>
                    <StyledInput type="text" id='userName' value={value} onChange={onChange}/>
                </label>
                <StyledButton><FormattedMessage id='submit_name'/></StyledButton>
            </StyledForm>
        </div>
    )
}