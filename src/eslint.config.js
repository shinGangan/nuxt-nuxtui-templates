// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
import pluginTailwindCss from 'eslint-plugin-tailwindcss';
import pluginVueScopedCss from 'eslint-plugin-vue-scoped-css';
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import pluginYml from 'eslint-plugin-yml';

export default createConfigForNuxt({
  features: {
    stylistic: {
      semi: true,
      quotes: 'single',
      commaDangle: 'never',
      braceStyle: '1tbs'
    }
  }
})
  .override('nuxt/vue/rules', {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': ['error', { singleline: { max: 3 } }]
    }
  })
  .append({
    name: 'ui/for-typescript',
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-import-type-side-effects': 'error'
    }
  })
  .append(
    { name: 'ui/for-vue' },
    ...pluginTailwindCss.configs['flat/recommended'],
    ...pluginVueScopedCss.configs['flat/recommended'],
    ...pluginVueA11y.configs['flat/recommended'],
    ...pluginYml.configs['flat/recommended']
  )
  .append(...eslintPluginJsonc.configs['flat/recommended-with-json']);
