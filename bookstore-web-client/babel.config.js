'use strict';

module.exports = function (api) {
    api.cache(true);

    const env = process.env.BABEL_ENV || process.env.NODE_ENV;
    const isEnvDevelopment = env === 'development';
    const isEnvProduction = env === 'production';
    const isEnvTest = env === 'test';

    if (!isEnvDevelopment && !isEnvProduction && !isEnvTest) {
        throw new Error(
            'You must specify `NODE_ENV` or '
            + '`BABEL_ENV` environment variables. Valid values are "development", '
            + '"test", and "production". Instead, received: '
            + JSON.stringify(env)
            + '.',
        );
    }

    if (isEnvDevelopment) {
        return {
            presets: [
                [require('@babel/preset-env').default, {useBuiltIns: 'entry', corejs: "core-js@3", modules: false}],
                [require('@babel/preset-react').default, {useBuiltIns: true, development: true}],
            ],
            plugins: [
                [require('@babel/plugin-transform-runtime').default, {
                    corejs: 3,
                    helpers: false,
                    regenerator: true,
                    useESModules: false,
                }],
                [require('@babel/plugin-transform-react-constant-elements').default],
            ],
        };
    }

    if (isEnvProduction) {
        return {
            presets: [
                [require('@babel/preset-env').default, {useBuiltIns: 'entry', corejs: "core-js@3", modules: false}],
                [require('@babel/preset-react').default, {useBuiltIns: true, development: false}],
            ],
            plugins: [
                [require('@babel/plugin-transform-runtime').default, {
                    corejs: 3,
                    helpers: false,
                    regenerator: true,
                    useESModules: false,
                }],
                [require('@babel/plugin-transform-react-constant-elements').default],
            ],
        };
    }

    if (isEnvTest) {
        return {
            presets: [
                [require('@babel/preset-env').default, {targets: {node: '8.12'}}],
                [require('@babel/preset-react').default, {useBuiltIns: true, development: true}],
            ],
            plugins: [
                [require('@babel/plugin-transform-runtime').default, {
                    corejs: false,
                    helpers: false,
                    regenerator: true,
                    useESModules: false,
                }],
                [require('@babel/plugin-transform-react-constant-elements').default],
            ],
        };
    }
};
