module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "eslint no-unused-vars":'off'
    }
}
module.exports = {
    root: true,
    extends: '@react-native-community',
    extends: ['airbnb', 'prettier'],
    rules: {
        'import/prefer-default-export': 'off',
        'import/extensions': ['off'],
     }
  };
