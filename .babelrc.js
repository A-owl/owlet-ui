module.exports = {
  "presets": [
    ["@babel/env", {
      "targets": {
        "browsers": [
          "last 2 versions",
          "> 5%"
        ]
      },
      "useBuiltIns": "usage",
      "modules": process.env.BABEL_MODULES || "commonjs" // babel's default is commonjs
    }],
    "@babel/typescript",
    "@babel/react"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    "babel-plugin-add-react-displayname"
  ],
  "env": {
    "es": {
      "presets": [["@babel/preset-env", { "modules": false }]],
      "plugins": [["@babel/plugin-transform-runtime", { "useESModules": true }]]
    }
  }
};
