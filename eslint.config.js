import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['*.config.*', 'eslint.config.js', 'vite.config.*'],
  },
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
];
