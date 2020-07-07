module.exports = {
  presets: [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv'
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~': './src',
          '@resources': './resources',
          '@images': './resources/images',
          '@components': './src/components',
          '@config': './src/config',
          '@providers': './src/providers',
          '@routers': './src/routers',
          '@schemas': './src/schemas',
          '@screens': './src/screens',
          '@services': './src/services',
          '@util': './src/util'
        }
      }
    ]
  ]
};
