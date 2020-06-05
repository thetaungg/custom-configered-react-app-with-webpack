module.exports = {
  entry: [//where the webpack will start bundling. Starting for this file, all the related(imported) files to it will get bundled
    "./src/index.js"
  ],
  output: {//where the output file(bundle.js) will be
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./dist"
  },
  module: {
    rules: [//before creating the output file, we want the webpack to follow these rules
      {//rule for .js and .jsx files
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: ['babel-loader']// compile .js and .jsx file with babel to es5 before bundling all together
      },
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: ['eslint-loader']// check the syntax error of .js and .jsx files before bundling
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],//when importing we don't need to add .js or .jsx
  }
}