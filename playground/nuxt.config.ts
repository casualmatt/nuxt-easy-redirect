export default defineNuxtConfig({
  modules: ["../src/module"],
  redirects: {
    verbese: true,
    rules: [
      {
        origin: "/about",
        destination: "/about-us",
        statusCode: 302,
      },
      {
        origin: "/about1",
        destination: "/about-us2",
        statusCode: 301,
      },
    ],
  },
  devtools: { enabled: true },
});
