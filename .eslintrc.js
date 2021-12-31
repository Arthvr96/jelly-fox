module.exports = {
  ignorePatterns: [
    '**/public/**',
    '**/.cache/**',
    '**/static/**',
    '**/content/**',
  ],
  extends: [
    'plugin:import/recommended',
    'plugin:react-hooks/recommended',
    'airbnb/hooks',
    'airbnb',
  ],
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],
  },
  env: {
    browser: true,
  },
};
