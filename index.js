module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "mocha": true,
        "jest": true,
        "es6": true
    },
    "plugins": [
        "redux-saga",
        "react",
        "jsx-a11y",
        "json"
    ],
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "arrow-body-style": [
            2,
            "as-needed"
        ],
        "comma-dangle": [
            2,
            "always-multiline"
        ],
        "import/imports-first": 0,
        "import/newline-after-import": 0,
        "import/no-dynamic-require": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 0,
        "import/no-unresolved": 2,
        "import/prefer-default-export": 0,
        "indent": [
            2,
            4,
            {
                "SwitchCase": 1
            }
        ],
        "jsx-a11y/anchor-is-valid": 2,
        "jsx-a11y/aria-props": 2,
        "jsx-a11y/heading-has-content": 0,
        "jsx-a11y/label-has-for": 2,
        "jsx-a11y/mouse-events-have-key-events": 2,
        "jsx-a11y/role-has-required-aria-props": 2,
        "jsx-a11y/role-supports-aria-props": 2,
        "max-len": 0,
        "newline-per-chained-call": 0,
        "no-confusing-arrow": 0,
        "no-console": 1,
        "no-use-before-define": 0,
        "prefer-template": 2,
        "class-methods-use-this": 0,
        "react/forbid-prop-types": 0,
        "react/jsx-first-prop-new-line": [
            2,
            "multiline"
        ],
        "react/jsx-filename-extension": 0,
        "react/jsx-no-target-blank": 0,
        "react/require-extension": 0,
        "react/self-closing-comp": 0,
        "redux-saga/no-yield-in-race": 2,
        "redux-saga/yield-effects": 2,
        "require-yield": 0,
        "import/no-webpack-loader-syntax": 0,
        "no-await-in-loop": "off",
        "no-restricted-syntax": [
            "error",
            {
                "message": "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
                "selector": "ForInStatement"
            },
            {
                "message": "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
                "selector": "LabeledStatement"
            },
            {
                "message": "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
                "selector": "WithStatement"
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "webpack": {
                "config": "./internals/webpack/webpack.test.js"
            }
        }
    }
};