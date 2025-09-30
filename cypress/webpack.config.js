const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.feature$/,
        use: [
          {
            loader: 'cypress-cucumber-preprocessor/loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.feature']
  }
};