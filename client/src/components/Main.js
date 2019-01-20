import React from 'react';
import Helmet from "react-helmet";
import {FormattedMessage} from 'react-intl';

export default () => (
    <div>
        <FormattedMessage id="mainPage">
            {title => <Helmet>
                <title>{title}</title>
            </Helmet>}
        </FormattedMessage>
        <h2> Here must be "main page" but now nothing interested </h2>
    </div>
);
