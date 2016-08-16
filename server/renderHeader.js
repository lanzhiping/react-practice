const React = require('react');
const ReactDOM = require('react-dom');
const HtmlHeader = require('../components/header/htmlHeader');

function renderHeader() {
    return ReactDOM.render(<HtmlHeader />);
}

module.exports = renderHeader;
