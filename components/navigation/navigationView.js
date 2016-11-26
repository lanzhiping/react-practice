const React = require('react');

function onNavigationClick() {
    console.log('onNavigationClick');
}

function NavigationView() {
    return <div className="navigation" onClick={onNavigationClick}>navigation</div>;
}

module.exports = NavigationView;

