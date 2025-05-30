module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV === 'development');
  // api.cache.never();
  const plugins = [
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ['react-hot-loader/babel'],
    // 'transform-es2015-modules-commonjs',
    'babel-plugin-dynamic-import-node',
    '@babel/plugin-syntax-flow',
    '@babel/plugin-proposal-optional-chaining',
  ];
  if (api.env() === 'test') plugins.push('require-context-hook');

  const presets = [
    '@babel/preset-typescript',
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-react',
  ];

  return {
    presets,
    plugins,
  };
};
