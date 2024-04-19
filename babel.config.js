module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                targets: {
                    "chrome": "40"
                },
                useBuiltIns: "usage",
                corejs: 3
            }
        ],
        "@babel/preset-react"
    ]
}