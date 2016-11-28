const a = 'hello world';
console.log(`this is a backend client side code ${a}`);
window.production = 'production';

import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import ImageList from './imageList';
import Menu from './menu';

require('react-tap-event-plugin')();

const mainContentStyle = {
    display: 'inline-block',
    width: 'calc(100% - 188px)',
    padding: '10px',
    height: '100%',
    verticalAlign: 'top',
};

class AppBarExampleIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMenuItem: { name: '后台管理首页' },
        };
    }

    render() {
        const self = this;
        function selectMenuItem(item) {
            self.setState({
                selectedMenuItem: item,
            });
        }

        return (
          <MuiThemeProvider>
            <div style={{ height: '100%' }}>
                <Menu onMenuClick={selectMenuItem} />
                <div style={mainContentStyle}>
                  <AppBar title={this.state.selectedMenuItem.name} iconElementLeft={null} />
                  <ImageList />
                </div>
            </div>
          </MuiThemeProvider>
        );
    }
}

ReactDom.render(<AppBarExampleIcon />, document.getElementById('root'));
