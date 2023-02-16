module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        'react-app',
        'airbnb/hooks'
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    plugins: [
        ["react", "react-hooks", "@typescript-eslint", "prettier"],
    ],
    rules: {
        'jsx-a11y/anchor-is-valid': 'warn',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-filename-extension': 'warn',
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': 'off',
        'no-param-reassign': ['error', { props: true, ignorePropertyModificationsFor: ['state', 'acc'] }],
    },
    settings: {
        "import/resolver": {
            typescript: {}
        }
    }
}
