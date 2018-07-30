module.exports = (api) => {
  const presets = [
    [
      '@babel/env', {
        targets: {
          browsers: '> 1%',
        },
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/preset-react',
    ],
  ];
  const plugins = [
    'react-hot-loader/babel',
    '@babel/syntax-dynamic-import',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    '@babel/plugin-proposal-class-properties',
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ];

  if (api.env() === 'production') {
    plugins.push(['transform-react-remove-prop-types']);
  }
  api.cache(false);
  return { presets, plugins };
};
