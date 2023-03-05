module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['@typescript-eslint', 'prettier'],
    ignorePatterns: ['node_modules'],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
        'no-console': 'off',
        'linebreak-style': 'off',
        'no-nested-ternary': 'off',
        radix: 'off',
        'no-underscore-dangle': 'off',
    },
}

// if you change any rule then reload the window
