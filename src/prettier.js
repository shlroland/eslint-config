import prettierConfig from 'eslint-config-prettier'

/**
 * Turns off all rules that are unnecessary or might conflict with Prettier.
 *
 * Notice that this config does not run `prettier` as an ESLint rule, so you
 * have to run `pretter` separately for formatting.
 */
export const prettier = () => {
  /** @type {import('eslint-define-config').FlatESLintConfigItem[]} */
  const config = [
    {
      rules: {
        ...prettierConfig.rules,
      },
    },
  ]

  return config
}