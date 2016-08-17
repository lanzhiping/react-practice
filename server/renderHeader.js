const React = require('react');
const ReactDOMServer = require('react-dom/server');
const HtmlHeader = require('htmlHeader');

function renderHeader() {
    return ReactDOMServer.renderToString(<HtmlHeader />);
}

module.exports = renderHeader;
