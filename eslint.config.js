import { eslintBaseConfig } from './eslint/base.js';
import { globals } from './eslint/globals.js';
import { eslintPluginSimpleSortImportsConfig } from './eslint/import.js';
import { eslintPluginReactConfig } from './eslint/react.js';
import { eslintPluginStylisticConfig } from './eslint/stylistic.js';
import { eslintPluginTailwindCssConfig } from './eslint/tailwind.js';
import { eslintPluginTypescriptConfig } from './eslint/typescript.js';
import { eslintPluginUnicornConfig } from './eslint/unicorn.js';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import jsxA11y from "eslint-plugin-jsx-a11y";

export default [
  ...eslintBaseConfig,
  ...eslintPluginTypescriptConfig,
  ...eslintPluginReactConfig,
  ...eslintPluginUnicornConfig,
  ...eslintPluginStylisticConfig,
  ...eslintPluginTailwindCssConfig,
  ...eslintPluginSimpleSortImportsConfig,
  jsxA11y.flatConfigs.recommended,
  eslintPluginPrettierRecommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      parserOptions: {
          project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
          tsconfigRootDir: import.meta.dirname,
      },
      globals: {
          ...globals.browser,
      }
    },
    linterOptions: {
      noInlineConfig: false,
      reportUnusedDisableDirectives: true
    },
  },
  {
    ignores: [
      ".husky",
      "build",
      "coverage",
      "logs",
      "node_modules*",
      "**/*.{js,cjs}",
    ],
  }
];
