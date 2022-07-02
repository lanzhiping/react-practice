const React = require("react");
const { useState } = require("react");

const Counter = () => {
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={onClick}>Click to +1</button>
    </div>
  );
};

module.exports = Counter;
