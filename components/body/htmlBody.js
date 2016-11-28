const React = require('react');
const NavigationView = require('navigationView');
const appData = require('appData');

function Header(props) {
    return (
        <div>
            <div className="logo">
                <a href="/"><img src={props.logo} alt="logo" /></a>
            </div>
            <NavigationView />
        </div>
    );
}

function HtmlBody() {
    return (
      <div id="root">
        <Header logo={appData.logo} navigation={appData.navigation} />
      </div>);
}

module.exports = HtmlBody;
