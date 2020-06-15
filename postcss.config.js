// postcss.config.js
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("cssnano")({ preset: "default" }),
    require("autoprefixer"),
  ],
}