const { withFederatedSidecar } = require('@module-federation/nextjs-mf');

module.exports = withFederatedSidecar({
  name: 'core',
  filename: 'static/chunks/remoteEntry.js',
  exposes: {
    './title': './components/exposedTitle.js',
    './core': './pages/core',
    './login': './pages/login',
    './pages-map': './pages-map.js',
  },
  remotes: {
    home: 'home@http://localhost:3001/_next/static/chunks/remoteEntry.js',
    events: 'events@http://localhost:3002/_next/static/chunks/remoteEntry.js',
    core:
      'core@http://localhost:3000/_next/static/chunks/remoteEntry.js',
  },
  shared: {
    react: {
      requiredVersion: false,
      singleton: true,
    },
  },
})({
  webpack5: true,
  webpack(config, options) {
    const { webpack } = options;

    config.experiments = { topLevelAwait: true, layers: true };

    config.module.rules.push({
      test: /_app.js/,
      loader: '@module-federation/nextjs-mf/lib/federation-loader.js',
    });

    config.plugins.push(
      new webpack.container.ModuleFederationPlugin({
        remotes: {
          home: 'home@http://localhost:3001/_next/static/chunks/remoteEntry.js',
          events:
            'events@http://localhost:3002/_next/static/chunks/remoteEntry.js',
          core:
            'core@http://localhost:3000/_next/static/chunks/remoteEntry.js',
        },
        shared: {
          'styled-jsx': {
            requiredVersion: false,
            singleton: true,
            eager: true,
          },
          react: {
            singleton: true,
            eager: true,
            requiredVersion: false,
          },
        },
      })
    );
    return config;
  },
});
