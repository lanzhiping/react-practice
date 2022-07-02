require("babel-register")({
  presets: ["react"],
  plugins: ["syntax-dynamic-import"],
});

require("./server/index");
