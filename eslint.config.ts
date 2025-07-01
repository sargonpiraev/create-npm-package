import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    ignores: ['build/', 'coverage/', 'node_modules/', '.DS_Store', 'src/generated/', 'openapi-ts-error-*.log'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
]
