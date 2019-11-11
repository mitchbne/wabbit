// postcss.config.js
const tailwindcss = require("tailwindcss")
const cssnano = require("cssnano")
const autoprefixer = require("autoprefixer")
const purgecss = require("@fullhuman/postcss-purgecss")({
  content: [
    "./src/**/*.js",
    "./src/**/*.jsx",
    "./public/index.html",
  ],
  css: ["**/*.css"],
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [], // Matches special character in TailwindCSS
})

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    cssnano({ preset: "default" }),
    autoprefixer,
    ...process.env.NODE_ENV === "production" ? [purgecss] : [],
  ],
}