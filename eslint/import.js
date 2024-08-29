// @ts-check

import eslintPluginSimpleSortImports from 'eslint-plugin-simple-import-sort';

/** @type {import('@typescript-eslint/utils').TSESLint.FlatConfig.ConfigFile} */
export const eslintPluginSimpleSortImportsConfig = [
  {
    plugins: {
      "simple-import-sort": eslintPluginSimpleSortImports,
    },
    rules: {
      'simple-import-sort/imports': 'error',
			'simple-import-sort/exports': 'error',
    },
  },
];
