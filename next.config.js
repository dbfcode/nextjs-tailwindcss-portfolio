const { i18n } = require("./next-i18next.config");

module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["pt-BR", "en"],
    defaultLocale: "pt-BR",
    localeDetection: true,
  },
};
