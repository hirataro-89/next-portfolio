import mantine from 'eslint-config-mantine';
import tseslint from 'typescript-eslint';

export default [
  ...mantine,
  ...tseslint.config({
    ignores: ['**/*.{mjs,cjs,js,d.ts,d.mts}'],
  }, {
    files: ['**/*.story.tsx'],
    rules: {
      'no-console': 'off'
    },
  }),
];