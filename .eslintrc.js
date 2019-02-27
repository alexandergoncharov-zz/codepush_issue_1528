module.exports = {
  "extends": "airbnb",
  "plugins": ["react", "react-native"],
  "globals": {
    "__DEV__": true,
    "fetch": true
  },
  "parser": "babel-eslint",
  "rules": {
    "max-len": ["error", 120],
    "no-console": 0,
    "no-unused-vars": 0,
    "react/forbid-prop-types": [0, { "forbid": ["any", "array", "object"] }],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "space-before-function-paren": ["error", { "anonymous": "ignore", "named": "always" }],
    "semi":[2,'never'],
    "no-redeclare":1,
    "no-use-before-define": ["error", { "variables": false }],
    "eqeqeq": ["error", "always"],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "no-unused-vars": ["error", {"args": "none"}],
    "import/extensions": [2, "never", { "web.js": "never", "json": "never" }],
    "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
    "import/no-unresolved": [2, { "ignore": ["antd-mobile"] }],
    "spaced-comment": ["error", "always", {
      "line": {
        "markers": ["/"],
        "exceptions": ["-", "+"]
      },
      "block": {
        "markers": ["!"],
        "exceptions": ["*"],
        "balanced": true
      }
    }]
  }
};