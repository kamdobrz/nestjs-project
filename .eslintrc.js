module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    root: true,
    env: {
        "browser": true,
        "es6": true,
        "amd": true,
        "jest": true
    },
    rules: {
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-extra-parens": "error",
        "no-unexpected-multiline": "error",
        "default-case": "error",
        "no-case-declarations": 0,
        "no-else-return": "error",
        "no-shadow": ["error", { "hoist": "functions" }],
        "array-bracket-spacing": ["error", "never"],
        "block-spacing": ["error", "never"],
        "brace-style": "error",
        "camelcase": "error",
        "comma-dangle": ["error", "never"],
        "func-call-spacing": ["error", "never"],
        "jsx-quotes": ["error", "prefer-single"],
        "key-spacing": ["error", { "beforeColon": false, "afterColon": true, "mode": "strict" }],
        "keyword-spacing": ["error", { "before": true, "after": true }],
        "no-lonely-if": "error",
        "no-multiple-empty-lines": "error",
        "no-trailing-spaces": "error",
        "object-curly-spacing": ["error", "never"],
        "arrow-body-style": ["error", "as-needed"],
        "arrow-parens": ["error", "as-needed"],
        "arrow-spacing": "error",
        "no-duplicate-imports": "error",
        "no-var": "error",
        "prefer-const": "error",
        "prefer-rest-params": "error"
    },
};
