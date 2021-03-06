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
    'plugin:prettier/recommended',
  ],
  plugins: ['import', 'prettier'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    quotes: ['error', 'single'],
    'import/prefer-default-export': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/require-default-props': 0,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
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
