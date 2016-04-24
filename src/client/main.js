require('./assets/index.js');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getRoutes from './routes/routes.js';
import getStore from './redux/store.js';

ReactDOM.render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
        <Provider store={getStore()}>
            {getRoutes()}
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('content')
);
