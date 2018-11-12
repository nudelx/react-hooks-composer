module.exports = {
  mode: 'production',
  entry: './index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    // filename: '[name].js',
    // path: __dirname + '/lib'
    filename: 'index.js',
    library: 'mylib',
    libraryTarget: 'umd',
    libraryExport: 'default'
  }
}
