module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    filename: '[name].js',
    path: __dirname + '/lib'
  }
}
