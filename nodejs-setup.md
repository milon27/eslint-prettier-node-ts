## quick install for node js express

```bash

# instal all deps

pnpm i -D eslint@8.2.0 @typescript-eslint/eslint-plugin@5.54.0 @typescript-eslint/parser@5.54.0 eslint-config-airbnb-base@15.0.0 eslint-config-airbnb-typescript@17.0.0 prettier@2.8.4 eslint-config-prettier@8.6.0 eslint-plugin-prettier@4.2.1 eslint-plugin-import@2.25.3

```

1. copy .eslintrc.cjs

```js
module.exports = {
    env: {
        node: true,
        jest: true,
        es2021: true,
    },
    extends: [
        "airbnb-base",
        "airbnb-typescript/base",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: "./tsconfig.json",
    },
    plugins: ["@typescript-eslint", "prettier"],
    ignorePatterns: ["node_modules", "lib", "dist"],
    rules: {
        "prettier/prettier": [
            "warn",
            {
                endOfLine: "auto",
            },
        ],
        "no-console": "off",
        "linebreak-style": "off",
        "no-nested-ternary": "off",
        radix: "off",
        "no-underscore-dangle": "off",
    },
}

// if you change any rule then reload the window

```

1. copy .prettierrc.cjs

```js
// prettier.config.js or .prettierrc.js
module.exports = {
    trailingComma: "es5",
    tabWidth: 4,
    printWidth: 115,
    semi: false,
    singleQuote: false,
}

// if you change any rule then reload the window

```

1. update inclue array in tsconfig.json

```
include: [".eslintrc.js", "src"] // add extenstion properly cjs or js
```

1. add eslint script in package.json

```
"lint": "npx eslint . --fix",
"lint:check": "npx eslint ."
```
