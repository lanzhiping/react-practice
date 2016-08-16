const React = require('react');

// function HtmlHeader() {
//     return (<head>
//       <title>Reactjs Learning</title>
//       <script type="text/javascript" src="/client.bundle.js"></script>
//     </head>);
// }
const HtmlHeader = React.createClass({
    render: () => (
      <head>
        <title>Reactjs Learning</title>
        <script type="text/javascript" src="/client.bundle.js"></script>
      </head>
    ),
});

module.exports = HtmlHeader;
