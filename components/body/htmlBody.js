const React = require('react');
const NavigationView = require('navigationView');

function HtmlBody() {
    return (
      <body>
        <div>
          Hello World!
          <NavigationView />
        </div>
      </body>);
}

module.exports = HtmlBody;
