require("babel-polyfill");

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import PageForDesk from './PageForDesk.js';
require('../../../../../src/client/assets/index.js');
import initStore from '../../src/redux/store.js';

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={initStore()}>
            <PageForDesk />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('content')
);