module.exports = {
    // ... other webpack configuration properties
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // ... other rules
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        }),
        // ... other plugins
    ],
    // ... other webpack configuration properties
};