const React = require('react');
const ReactDomServer = require('react-dom/server');
const HtmlBody = require('htmlBody');

function renderBody() {
    return ReactDomServer.renderToStaticMarkup(
      <body>
        <HtmlBody />
        <script type="text/javascript" src="/client.bundle.js"></script>
      </body>);
}

module.exports = renderBody;
