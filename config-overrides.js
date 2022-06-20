import { alias } from 'react-app-rewire-alias';

module.exports = function override(config) {
  alias({
    '@': 'src',
    '@features': 'src/features',
    '@pages': 'src/pages',
    '@shared': 'src/shared'
  })(config);

  return config;
};