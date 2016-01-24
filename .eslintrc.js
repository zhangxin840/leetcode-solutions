module.exports = {
    "rules": {
        "indent": [
            2,
            4
        ],
        "semi": [
            2,
            "always"
        ]
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "ecmaFeatures": {
        "jsx": true,
        "experimentalObjectRestSpread": true
    },
    "plugins": [
        "react"
    ]
};
