import React from 'react';
import Helmet from "react-helmet";

export default () => (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>About page</title>
            <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <h1>ABOUT TIME!</h1>
        <p>Nothing interested here</p>
    </div>
)
