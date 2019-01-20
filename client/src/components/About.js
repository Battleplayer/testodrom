import React from 'react';
import Helmet from "react-helmet";
import {FormattedMessage} from 'react-intl';

export default () => (
    <div>
        <FormattedMessage id="aboutPage">
            {title => <Helmet>
                <title>{title}</title>
            </Helmet>}
        </FormattedMessage>
        <h1>ABOUT TIME!</h1>
        <p>Nothing interested here</p>
    </div>
);
