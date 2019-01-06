const fs = require('fs');
const path = require('path');
const appDirectory = fs.realpathSync(process.cwd());
const eslintFormatter = require('react-dev-utils/eslintFormatter');

module.exports = {
    resolve: {
        alias: {
            'fht-components': path.resolve(__dirname, '../src/components')
        }
    },
    module: {
      rules: [
        {
          test: /\.stories\.js?$/,
          loaders: [require.resolve('@storybook/addon-storysource/loader')],
          enforce: 'pre',
        },
        {
            test: /\.scss$/,
            loaders: [
                "style-loader",
                "css-loader",
                "sass-loader"
            ],
            include: path.resolve(__dirname, "../src")
        },
        {
            test: /\.svg$/,
            loader: 'svg-sprite-loader'
        },
        {
            test: /\.(js|jsx)$/,
            enforce: 'pre',
            use: [
                {
                    options: {
                        formatter: eslintFormatter,
                        eslintPath: require.resolve('eslint'),
                        emitWarning: true
                    },
                    loader: require.resolve('eslint-loader')
                }
            ],
            include: path.resolve(appDirectory, 'src')
        }
      ]
    }
  };