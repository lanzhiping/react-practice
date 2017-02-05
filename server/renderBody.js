const React = require('react');
const ReactDomServer = require('react-dom/server');
const HtmlBody = require('htmlBody');
const url = require('url');

// const appData = require('appData');

// appData.navigation

// function getNavItems(item) {
//     if (item.subitems) {
//         return item.subitems.concat(item);
//     } else {
//         return item
//     }
// }

function getPageType(req) {
    var pathPrefix = url(req);
    return 'landing';
}

function renderBody() {
    console.log('```````', this.req.url)

    if (getPageType() === 'landing') {
        return ReactDomServer.renderToStaticMarkup(
            <body>
                <HtmlBody />
                <script type="text/javascript" src="/client.bundle.js"></script>
            </body>);
    } else {
        return ReactDomServer.renderToStaticMarkup(
            <body>Page not found!</body> // should be pretty error page
        );
    }

}

module.exports = renderBody;
