module.exports = {
  webpack: config => {
    config.output.library = 'sub-react';
    config.output.libraryTarget = 'umd';
    config.output.publicPath = 'http://localhost:3001/';
    return config;
  },
  devServer: config => {
    config.headers = {
      'Access-Control-Allow-Origin': '*'
    };
    return config;
  }
};
