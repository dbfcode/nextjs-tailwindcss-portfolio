module.exports = {
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en"],
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
