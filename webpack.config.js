const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    clean: true /** Очистка папки при каждой сборке */
  },
  resolve: {
    extensions: [ ".ts", ".tsx"],
  },
  externals: {
    react: "react",
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    client: {
      webSocketURL: 'auto://0.0.0.0:0/ws',
    }
  }
};
