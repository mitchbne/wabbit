
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  theme: {
    extend: {
      height: { "96": "32rem" },
      fontFamily: { sans: ["Inter var", ...defaultTheme.fontFamily.sans] },
    },
    container: { center: true },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui")({ layout: "sidebar" }),
  ],
}
