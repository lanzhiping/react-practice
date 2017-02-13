const React = require('react');
const ReactDomServer = require('react-dom/server');
const HtmlBody = require('htmlBody');
const url = require('url');

function getPageType(req) {
    const pathPrefix = url.parse(req.url);
    return 'landing';
}

function renderBody() {
    console.log('```````', this.req.url);

    if (getPageType(this.req) === 'landing') {
        return ReactDomServer.renderToStaticMarkup(
            <body>
                <HtmlBody />
                <script type="text/javascript" src="/client.bundle.js"></script>
            </body>);
    }

    return ReactDomServer.renderToStaticMarkup(<body>Page not found!</body>);
}

module.exports = renderBody;
