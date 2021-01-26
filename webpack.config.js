// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      React: path.resolve(__dirname, './node_modules/react/'),
      ReactDOM: path.resolve(__dirname, './node_modules/react-dom/'),
      '@': path.resolve('src'),
    },
  },
}
