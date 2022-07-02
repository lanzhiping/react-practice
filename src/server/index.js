const React = require("react");
const ReactDOM = require("react-dom/server");
const express = require("express");
const App = require("../components/App");

express()
  .use("/static", express.static("build"))
  .get("/", (req, res) => {
    const stream = ReactDOM.renderToPipeableStream(
      <html>
        <head>
          <title>React App</title>
          <link rel="stylesheet" href="/static/main.css" />
        </head>
        <body>
          <h1>This is a react practice web</h1>
          <div id="root">
            <App />
          </div>
          <script defer src="/static/vendors.js"></script>
          <script defer src="/static/main.js"></script>
        </body>
      </html>
    );

    return stream.pipe(res);
  })
  .listen(3002, () => console.log("server started at 3002"));
