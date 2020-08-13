module.exports = (api) => {
  // This caches the Babel config
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
      "babel-plugin-styled-components",
      "transform-class-properties",
      "@babel/plugin-transform-runtime",
      !api.env("production") && "react-refresh/babel",
    ].filter(Boolean),
  };
};
