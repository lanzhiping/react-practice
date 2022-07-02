const React = require("react");
const { hydrate } = require("react-dom");
const App = require("./components/App");
require("./components/index.css");

hydrate(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
