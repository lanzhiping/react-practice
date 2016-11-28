const React = require('react');

function onNavigationClick() {
    console.log('onNavigationClick');
}

function createNavigationItem(level) {
    return (item) => (
        <div className={`nav_level${level}`}>
            <a href={item.url} >
                {item.name}
            </a>
            {(item.subitems || []).map(createNavigationItem(level + 1))}
        </div>
    );
}

function NavigationView(props) {
    return (
        <div className="navigation" onClick={onNavigationClick}>
            {
                props.navigation.map(createNavigationItem(1))
            }
        </div>
    );
}

module.exports = NavigationView;

