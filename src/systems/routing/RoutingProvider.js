import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {router} from '../../systems/routing';

export default () => (
    <BrowserRouter basename={""}>
        {router.render()}
    </BrowserRouter>
);