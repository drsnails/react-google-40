module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    chrome: "40"
                },
                useBuiltIns: "entry",
                corejs: 3,
                debug: true
            }
        ],
        "@babel/preset-react"
    ],
    plugins: [
        "@babel/plugin-transform-arrow-functions",
        "@babel/plugin-transform-react-jsx",
    ]
};
