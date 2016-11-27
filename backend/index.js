const a = 'hello world';
console.log(`this is a backend client side code ${a}`);
window.production = 'production';

import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
require('react-tap-event-plugin')();

const AppBarExampleIcon = () => (
  <MuiThemeProvider>
    <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
  </MuiThemeProvider>
);


ReactDom.render(<AppBarExampleIcon />, document.getElementById('root'));
