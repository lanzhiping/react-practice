const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const getStyleLoaders = (cssOptions) => {
  const loaders = [
    "style-loader",
    {
      loader: MiniCssExtractPlugin.loader,
    },
    {
      loader: require.resolve("css-loader"),
      options: cssOptions,
    },
  ];
  return loaders;
};

module.exports = () => {
  return {
    target: "web",
    entry: {
      main: path.resolve(__dirname, "./src/clientEntry.js"),
    },
    output: {
      path: path.resolve(__dirname, "./build"),
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
          // components: {
          //   test: /[\\/]components[\\/]/,
          //   name: "components",
          //   chunks: "all",
          // },
        },
      },
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: getStyleLoaders({
            importLoaders: 1,
            sourceMap: false,
            modules: {
              mode: "icss",
            },
          }),
          sideEffects: true,
        },
        {
          test: /\.(jsx|js)$/,
          include: path.resolve(__dirname, "src"),
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  [
                    "@babel/preset-env",
                    {
                      targets: "defaults",
                    },
                  ],
                  "@babel/preset-react",
                ],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new ReactRefreshWebpackPlugin({
        overlay: false,
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[name].chunk.css",
      }),
    ],
  };
};
