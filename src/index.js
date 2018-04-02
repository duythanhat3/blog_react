import React from 'react';
import ReactDOM from 'react-dom';
import StoreProvider from './systems/store/StoreProvider';
import RoutingProvider from './systems/routing/RoutingProvider';
import {I18nextProvider} from 'react-i18next';
import i18n from './systems/i18n';
import './resources/herald/site/assets/bootstrap/css/bootstrap.min.css';
import './resources/herald/site/css/styles.css';
import './resources/herald/site/assets/font-awesome/css/font-awesome.min.css';

ReactDOM.render(
    <StoreProvider>
        <I18nextProvider i18n={i18n}><RoutingProvider/></I18nextProvider>
    </StoreProvider>,
    document.getElementById('root')
);