const production = require('./helpers/mode');

const webpackConfig = {
    mode: production ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                            compact: false,
                        },
                    },
                ],
            },
        ],
    },
    devtool: !production && 'source-map',
};

module.exports = webpackConfig;
