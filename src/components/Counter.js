import React from "react";

const Counter = () => {
  const [count, setCount] = React.useState(0);

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

export default Counter;
