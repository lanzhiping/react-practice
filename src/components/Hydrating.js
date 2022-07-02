const React = require("react");

const isServer = typeof document === "undefined";

const Hydrating = ({ interactive, children }) => {
  if (isServer || interactive) {
    return <React.Suspense>{children}</React.Suspense>;
  }

  return (
    <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: "" }} />
  );
};

module.exports = Hydrating;
