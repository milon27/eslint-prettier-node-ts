## quick install/setup

```bash

# instal all deps

pnpm i -D eslint@8.2.0 @typescript-eslint/eslint-plugin@5.54.0 @typescript-eslint/parser@5.54.0 eslint-config-airbnb-base@15.0.0 eslint-config-airbnb-typescript@17.0.0 prettier@2.8.4 eslint-config-prettier@8.6.0 eslint-plugin-prettier@4.2.1 eslint-plugin-import@2.25.3

# copy .eslintrc.js
# copy .prettierrc.js

# update inclue array in tsconfig.json

include: [".eslintrc.js", "src"]
```

## details setup

1. follow this guide/video:
    - https://www.youtube.com/watch?v=kWIlrSorqFE&ab_channel=FutureWebDesign
    - https://youtu.be/cchqeWY0Nak?t=516
    - https://gist.github.com/bradtraversy/aab26d1e8983d9f8d79be1a9ca894ab4
1. install prettier extension in vscode and setup as default formatter
   ![default formatter](img/default-formatter.png)
1. create node project `npm init -y`
1. `pnpm i -D prettier eslint` (use exact version)
1. `npx eslint --init`
1. `pnpx install-peerdeps --dev eslint-config-airbnb-base`
    - `pnpm install eslint-config-airbnb-base@15.0.0 eslint@^8.2.0 eslint-plugin-import@^2.25.2 --save-dev`
1. make the extends array like this: `extends: ["airbnb-base", "plugin:@typescript-eslint/recommended"],`
1. we need another plugin for typescript : eslint-config-airbnb-typescript `pnpm i eslint-config-airbnb-typescript`
1. update it extends: `extends: ["airbnb-base", "airbnb-typescript/base", "plugin:@typescript-eslint/recommended",]`

    - add parser option

```json
    parserOptions: {
       ecmaVersion: "latest",
       sourceType: "module",
    +  project: "./tsconfig.json",
    },
```

    - tell tsconfig.json about eslint

```json
"include": [".eslintrc.js", "src"]
```

## setup prettier

1. install deps: `pnpm i -D prettier eslint-config-prettier eslint-plugin-prettier`
1. add .prettierrc.js

```js
// prettier.config.js or .prettierrc.js
module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: false,
    singleQuote: true,
}

// if you change any rule then reload the window
```

1. update extends in eslint config

```js
extends: [
   'airbnb-base',
   'airbnb-typescript/base',
   'plugin:@typescript-eslint/recommended',
   'plugin:prettier/recommended',
],
```

1. update plugin

```js
plugins: ['@typescript-eslint', 'prettier'],
```

1. disable few rule in eslint

```js
rules: {
        'prettier/prettier': [
            'warn',
            {
                endOfLine: 'auto',
            },
        ],
        'no-console': 'off',
        'linebreak-style': 'off',
    }
```
