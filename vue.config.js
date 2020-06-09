const GoogleFontsPlugin = require('@beyonk/google-fonts-webpack-plugin');

module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/styles.scss";`,
            },
        },
    },

    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/i,
                    use: 'raw-loader',
                },
            ],
        },

        plugins: [
            new GoogleFontsPlugin({
                fonts: [{ family: 'Lato' }],
            }),
        ],
    },
};
