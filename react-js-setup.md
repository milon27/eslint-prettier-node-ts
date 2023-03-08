## quick install for react js (vite)

```bash

# instal all deps

pnpm i -D eslint@8.2.0 @typescript-eslint/eslint-plugin@5.54.0 @typescript-eslint/parser@5.54.0 eslint-config-airbnb@19.0.4 eslint-config-airbnb-typescript@17.0.0 prettier@2.8.4 eslint-config-prettier@8.7.0 eslint-plugin-prettier@4.2.1 eslint-plugin-import@2.25.3 eslint-plugin-jsx-a11y@6.5.1 eslint-plugin-react@7.28.0 eslint-plugin-react-hooks@4.3.0   


```

1. copy .eslintrc.cjs

```js
module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "airbnb",
        "airbnb-typescript",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended",
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./tsconfig.node.json"],
    },
    plugins: ["react", "@typescript-eslint", "prettier"],
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
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "react/jsx-no-constructed-context-values": "off",
        "import/no-extraneous-dependencies": "off",
        "@typescript-eslint/no-unused-expressions": "off",
        "@typescript-eslint/naming-convention": "off",
    },
}

// if you change any rule then reload the window


```

1. copy .prettierrc.cjs

```js
// prettier.config.js or .prettierrc.js or .prettierrc.cjs
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
"include": [".eslintrc.cjs", "src"],
```

1. add eslint script in package.json

```
"lint": "npx eslint . --fix",
"lint:check": "npx eslint ."
```
