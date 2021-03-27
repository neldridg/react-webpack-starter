module.exports = {
  "parser": "@typescript-eslint/parser",
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": 2018, // keep it recent-ish
    "sourceType": "module"
  },
  "plugins": [
    "@typescript-eslint",
    "react-hooks"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prop-types": "off"
  },
  "settings": {
    "react": {
      "pragma": "React",
      "version": "detect"
    }
  }
}
