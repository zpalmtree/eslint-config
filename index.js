module.exports = {
    env: {
        browser: true,
    },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'plugin:jest/style',
        'plugin:react/recommended',
    ],
    globals: {
        __dirname: true,
        module: true,
        require: true,
    },
    overrides: [
        {
            files: [
                '*.{spec,test}.{js,ts,tsx}',
                '**/__{mocks,tests}__/**/*.{js,ts,tsx}',
            ],
            env: {
                jest: true,
                'jest/globals': true,
            },
            globals: {
                $: true,
                browser: true,
                context: true,
                jestPuppeteer: true,
                page: true,
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            modules: true,
        },
        ecmaVersion: 2020,
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: [
        '@typescript-eslint',
        'jest',
        'putout',
        'react',
        'react-hooks',
    ],
    root: true,
    rules: {
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/comma-dangle': [
            'error',
            'always-multiline',
        ],
        '@typescript-eslint/dot-notation': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        '@typescript-eslint/indent': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/1824
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-implied-eval': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'after-used',
                argsIgnorePattern: '^_',
                ignoreRestSiblings: true,
                vars: 'all',
            },
        ],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/space-before-function-paren': 'error',
        'array-bracket-spacing': [
            'error',
            'always',
        ],
        'arrow-body-style': [
            'error',
            'as-needed',
        ],
        'arrow-parens': [
            'error',
            'as-needed',
        ],
        'class-methods-use-this': 'off',
        'comma-dangle': 'off', // Use `@typescript-eslint/comma-dangle` instead
        'import/imports-first': 'off',
        'import/newline-after-import': 'off',
        'import/no-dynamic-require': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/no-named-as-default': 'off',
        'import/no-unresolved': 'error',
        'import/no-webpack-loader-syntax': 'off',
        'import/prefer-default-export': 'off',
        indent: [
            'error',
            4,
            {
                // TypeScript fixes...
                ignoredNodes: [
                    // Ignore union type alias declarations to avoid an issue where ESLint was
                    // wanting multiline type unions to *not* be indented
                    'TSTypeAliasDeclaration > UnionType',

                    // Ignore cases where an object is typed by a type literal then subsequently
                    // assigned using an object expression to avoid an issue where ESLint
                    // was wanting the object expression to be indented further than desired
                    '*[typeAnnotation.typeAnnotation.type="TSTypeLiteral"] ObjectExpression',
                ],
                SwitchCase: 1,
            },
        ],
        'jsx-a11y/anchor-is-valid': 'error',
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/heading-has-content': 'off',
        'jsx-a11y/label-has-for': 'error',
        'jsx-a11y/mouse-events-have-key-events': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',
        'max-len': 'off',
        'newline-per-chained-call': 'off',
        'no-alert': 'off',
        'no-await-in-loop': 'off',
        'no-confusing-arrow': 'off',
        'no-console': 'warn',
        'no-restricted-syntax': [
            'error',
            {
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
                selector: 'ForInStatement',
            },
            {
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
                selector: 'LabeledStatement',
            },
            {
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
                selector: 'WithStatement',
            },
        ],
        'no-return-assign': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        'prefer-exponentiation-operator': 'off',
        'prefer-template': 'error',
        'putout/multiple-properties-destructuring': [
            'error',
        ],
        'react/forbid-prop-types': 'off',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'function-declaration',
                unnamedComponents: 'arrow-function',
            },
        ],
        'react/jsx-boolean-value': [
            'error',
            'always',
        ],
        'react/jsx-curly-brace-presence': [
            'error',
            'never',
        ],
        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: [
                    'tsx',
                ],
            },
        ],
        'react/jsx-first-prop-new-line': [
            'error',
            'multiline',
        ],
        'react/jsx-indent': 'off',
        'react/jsx-indent-props': 'off',
        'react/jsx-max-props-per-line': [
            'error',
            {
                maximum: 1,
                when: 'always',
            },
        ],
        'react/jsx-no-bind': [
            'error',
            {
                allowArrowFunctions: true,
                allowFunctions: true,
            },
        ],
        'react/jsx-no-target-blank': 'off',
        'react/jsx-sort-props': [
            'error',
            {
                ignoreCase: true,
            },
        ],
        'react/no-unstable-nested-components': [
            'error',
            {
                allowAsProps: false,
            },
        ],
        'react/require-default-props': [
            'error',
            {
                ignoreFunctionalComponents: true,
            },
        ],
        'react/require-extension': 'off',
        'react/self-closing-comp': 'off',
        // Below config is a copy of the ordering defined by the airbnb config, and has been
        // copied over here to make custom ordering easier on us in the future
        'react/sort-comp': [
            'error',
            {
                groups: {
                    lifecycle: [
                        'displayName',
                        'propTypes',
                        'contextTypes',
                        'childContextTypes',
                        'mixins',
                        'statics',
                        'defaultProps',
                        'constructor',
                        'getDefaultProps',
                        'getInitialState',
                        'state',
                        'getChildContext',
                        'getDerivedStateFromProps',
                        'componentWillMount',
                        'UNSAFE_componentWillMount',
                        'componentDidMount',
                        'componentWillReceiveProps',
                        'UNSAFE_componentWillReceiveProps',
                        'shouldComponentUpdate',
                        'componentWillUpdate',
                        'UNSAFE_componentWillUpdate',
                        'getSnapshotBeforeUpdate',
                        'componentDidUpdate',
                        'componentDidCatch',
                        'componentWillUnmount'
                    ],
                    rendering: [
                        '/^render.+$/',
                        'render'
                    ],
                },
                order: [
                    'static-variables',
                    'static-methods',
                    'instance-variables',
                    'lifecycle',
                    '/^handle.+$/',
                    '/^on.+$/',
                    'getters',
                    'setters',
                    '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/',
                    'instance-methods',
                    'everything-else',
                    'rendering',
                ],
            },
        ],
        'react/static-property-placement': 'off',
        'require-yield': 'off',
        'sort-keys': [
            'error',
            'asc',
            {
                caseSensitive: false,
                natural: true,
            },
        ],
    },
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': [
                '.ts',
                '.tsx',
            ],
        },
        'import/resolver': {
            typescript: {
                'alwaysTryTypes': true,
            },
        },
        react: {
            version: 'detect',
        },
    },
};
