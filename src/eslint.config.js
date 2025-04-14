// @ts-check
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import eslintPluginJsonc from 'eslint-plugin-jsonc';
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
      'vue/max-attributes-per-line': ['error', { singleline: { max: 3 } }],
      ...pluginVueScopedCss.configs['flat/recommended'].rules,
      ...pluginVueA11y.configs['flat/recommended'][0].rules
    }
  })
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' }
      ],
      '@typescript-eslint/explicit-function-return-type': 'warn'
    }
  })
  .append(
    ...pluginYml.configs['flat/recommended'],
    ...eslintPluginJsonc.configs['flat/recommended-with-json']
  );
