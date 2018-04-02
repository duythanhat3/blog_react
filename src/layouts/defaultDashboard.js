import React from 'react';
import NavbarTop from './navbars/navbarTop'

let defaultDashboard = ({children}) => (
    <div>
        <NavbarTop />
        {children}
    </div>
);

export default defaultDashboard;