  
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  target: "node",
  entry: {
    app: [
      "./app.js"
    ]
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "app.js"
  },
  externals: [
    nodeExternals()
  ],
  plugins: [
    new CopyPlugin([
      {
        from: './package.json',
        to: '../build/package.json'
      },
      {
        from: './.env/production.config.env',
        to: '../build/.env/production.config.env'
      },
      {
        from: './.env/development.config.env',
        to: '../build/.env/development.config.env'
      },
      {
        from: '../smart-matching-client/build',
        to: '../build/client'
      }
    ])
  ]
}