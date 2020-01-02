// We use eslint-loader so even warnings are very visible.
// This is why we mostly use "WARNING" level for potential errors,
// and avoid "ERROR" level.

// The rules below are listed in the order they appear on the eslint
// rules page. All rules are listed to make it easier to keep in sync
// as new ESLint rules are added.
// http://eslint.org/docs/rules/
module.exports = {
    rules: {
        // enforce “for” loop update clause moving the counter in the right direction.
        'for-direction': 'off',

        // enforce return statements in getters
        'getter-return': ['warn', {allowImplicit: true}],

        // disallow await inside of loops
        'no-await-in-loop': 'off',

        // disallow comparing against -0
        'no-compare-neg-zero': 'warn',

        // disallow assignment operators in conditional expressions
        'no-cond-assign': ['warn', 'except-parens'],

        // disallow the use of console
        'no-console': 'warn',

        // disallow constant expressions in conditions
        'no-constant-condition': 'warn',

        // disallow control characters in regular expressions
        'no-control-regex': 'warn',

        // disallow the use of debugger
        'no-debugger': 'warn',

        // disallow duplicate arguments in function definitions
        'no-dupe-args': 'warn',

        // disallow duplicate keys in object literals
        'no-dupe-keys': 'warn',

        // disallow duplicate case labels
        'no-duplicate-case': 'warn',

        // disallow empty block statements
        'no-empty': ['warn', {allowEmptyCatch: true}],

        // disallow empty character classes in regular expressions
        'no-empty-character-class': 'warn',

        // disallow reassigning exceptions in catch clauses
        'no-ex-assign': 'warn',

        // disallow unnecessary boolean casts
        'no-extra-boolean-cast': 'warn',

        // disallow unnecessary parentheses
        'no-extra-parens': 'off',

        // disallow unnecessary semicolons
        'no-extra-semi': 'warn',

        // disallow reassigning function declarations
        'no-func-assign': 'warn',

        // disallow variable or function declarations in nested blocks
        'no-inner-declarations': 'warn',

        // disallow invalid regular expression strings in RegExp constructors
        'no-invalid-regexp': 'warn',

        // disallow irregular whitespace outside of strings and comments
        'no-irregular-whitespace': 'warn',

        // disallow calling global object properties as functions
        'no-obj-calls': 'warn',

        // disallow calling some Object.prototype methods directly on objects
        'no-prototype-builtins': 'off',

        // disallow multiple spaces in a regular expression literal
        'no-regex-spaces': 'warn',

        // disallow sparse arrays
        'no-sparse-arrays': 'warn',

        // disallow template literal placeholder syntax in regular strings
        'no-template-curly-in-string': 'warn',

        // disallow confusing multiline expressions
        'no-unexpected-multiline': 'warn',

        // disallow unreachable statements after a return, throw, continue, or break statement
        'no-unreachable': 'warn',

        // disallow control flow statements in finally blocks
        'no-unsafe-finally': 'warn',

        // disallow negating the left operand of relational operators
        'no-unsafe-negation': 'off',

        // require calls to isNaN() when checking for NaN
        'use-isnan': 'warn',

        // ensure JSDoc comments are valid
        'valid-jsdoc': [
            'off',
            {
                prefer: {'return': 'returns'},
                preferType: {Boolean: 'boolean', Number: 'number', object: 'Object', String: 'string'},
                requireParamDescription: false,
                requireReturn: false,
                requireReturnDescription: false,
            },
        ],

        // enforce comparing typeof expressions against valid strings
        'valid-typeof': ['warn', {requireStringLiterals: true}],
    },
};
