const React = require('react');
const ReactDomServer = require('react-dom/server');
const HtmlBody = require('htmlBody');

function renderBody() {
    return ReactDomServer.renderToString(<HtmlBody />);
}

module.exports = renderBody;
