const path = require('path');

module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:jest/recommended',
        'react-app',
        'airbnb/hooks',
        'airbnb',
        'airbnb-typescript',
        'prettier'
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
   /* parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },*/
    parserOptions: {
        project: path.resolve(__dirname, 'tsconfig.json'),
    },
    plugins: ["react", "react-hooks", "@typescript-eslint", "prettier", 'jest', 'import'],
    rules: {
        'jsx-a11y/anchor-is-valid': 'warn',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': 'warn',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': 'off',
        'no-param-reassign': ['warn', { props: true, ignorePropertyModificationsFor: ['state', 'acc'] }],
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'warn',
        'import/order': ['error', { 'newlines-between': 'always' }],
        'consistent-return': 'warn',
        'import/extensions': 'off',
        'padding-line-between-statements': ['warn', { blankLine: 'always', prev: '*', next: 'return' }],
        'space-before-function-paren': 'off',
        'object-curly-newline': 'off',
        'operator-linebreak': 'off',
        curly: ['error', 'all'],
        indent: 'off',
        'no-restricted-syntax': ['error', 'ForInStatement', 'WithStatement'],
        'no-continue': 'off',
        'no-console': 'warn',
        'no-await-in-loop': 'off',
        'jest/no-standalone-expect': ['error', { additionalTestBlockFunctions: ['beforeAll', 'afterAll'] }],
        'jest/no-mocks-import': 'warn',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase', 'snake_case', 'PascalCase', 'UPPER_CASE'],
            },
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
        ],
        '@typescript-eslint/camelcase': 'off',
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/no-explicit-any': 'warn',
        'no-underscore-dangle': ['error', { allow: ['_id'] }],
        semi: ['error', 'always'],
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto',
            },
        ],
        'no-unused-vars': [
            'warn',
            { vars: 'all', args: 'all', argsIgnorePattern: '^_', ignoreRestSiblings: true },
        ],
        'linebreak-style': 'off',
        'implicit-arrow-linebreak': 'off',
        'max-len': 'off',
    },
    settings: {
        "import/resolver": {
            typescript: {
                project: path.resolve(__dirname),
                alwaysTryTypes: true,
            }
        },
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
    }
}
