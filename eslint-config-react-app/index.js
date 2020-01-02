module.exports = {
    'root': true,
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
    ],
    'env': {
        browser: true,
        commonjs: true,
        es6: true,
        jest: true,
        node: true,
    },
    'extends': [
        '@ateam/eslint-config-base',
        './rules/react',
        './rules/react-a11y',
    ].map(require.resolve),
    'parserOptions': {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            experimentalObjectRestSpread: true,
        },
    },
    'rules': {},
};
