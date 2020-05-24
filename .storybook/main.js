module.exports = {
  stories: ["../**/stories.js"],
  addons: ["@storybook/addon-actions"],
  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "react-native$": "react-native-web",
      },
    },
  }),
};
