/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  transpilePackages: ["gw2e-shared"],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
