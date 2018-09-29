const withTypescript = require("@zeit/next-typescript");

const distDir = "../../dist/functions/next";

module.exports = withTypescript({ distDir });
