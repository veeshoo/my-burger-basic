import React from 'react';

import Toolbar from '../Navigations/Toolbar/Toolbar';
import SideDrawer from '../Navigations/SideDrawer/SideDrawer';
import classes from './Layout.css';

const layout = (props) => (
    <React.Fragment>
        <Toolbar />
        <SideDrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </React.Fragment>
)

export default layout;