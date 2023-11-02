const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  mode: 'production',
  configureWebpack: {
    plugins: [
      new Visualizer({ filename: './statistics.html' }),
    ],
  },
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  },
};
