const React = require("react");
const Hydrating = require("./Hydrating");

const DynamicCounter = React.lazy(() => import("./Counter.js"));
const DynamicLongBlog = React.lazy(() => import("./LongBlog.js"));

function App() {
  return (
    <div className="App">
      <h2>Interactive components</h2>
      <Hydrating interactive>
        <DynamicCounter />
      </Hydrating>
      <br />
      <br />
      <br />
      <br />
      <h2>Static components</h2>
      <Hydrating>
        <DynamicLongBlog />
      </Hydrating>
    </div>
  );
}

module.exports = App;
