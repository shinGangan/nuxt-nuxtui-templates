// @ts-check
import pluginVueI18n from '@intlify/eslint-plugin-vue-i18n';
import { createConfigForNuxt } from '@nuxt/eslint-config/flat';
import pluginJsonc from 'eslint-plugin-jsonc';
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
    },
    tooling: {
      jsdoc: true,
      regexp: true,
      unicorn: true
    }
  }
})
  .override('nuxt/vue/rules', {
    rules: {
      'vue/max-attributes-per-line': ['error', { singleline: { max: 3 } }],
      ...pluginVueScopedCss.configs['flat/recommended'].rules,
      ...pluginVueI18n.configs['flat/recommended'][0].rules,
      ...pluginVueA11y.configs['flat/recommended'][0]?.rules
    }
  })
  .override('nuxt/typescript/rules', {
    rules: {
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
      '@typescript-eslint/no-empty-object-type': [
        'error',
        { allowInterfaces: 'with-single-extends' }
      ],
      '@typescript-eslint/explicit-function-return-type': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  })
  .override('nuxt/tooling/jsdoc', {
    rules: {
      'jsdoc/require-jsdoc': ['warn', {
        publicOnly: true,
        require: {
          ArrowFunctionExpression: true,
          ClassDeclaration: true,
          ClassExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true
        },
        contexts: [
          'VariableDeclaration',
          'TSInterfaceDeclaration',
          'TSTypeAliasDeclaration',
          'TSMethodSignature'
        ]
      }],
      'jsdoc/require-description': ['warn',
        {
          contexts: [
            'ArrowFunctionExpression',
            'ClassDeclaration',
            'ClassExpression',
            'FunctionDeclaration',
            'FunctionExpression',
            'MethodDefinition',
            'PropertyDefinition',
            'VariableDeclaration',
            'TSInterfaceDeclaration',
            'TSTypeAliasDeclaration',
            'TSPropertySignature',
            'TSMethodSignature'
          ]
        }
      ],
      'jsdoc/require-returns': ['off'],
      'jsdoc/check-tag-names': ['error',
        {
          definedTags: ['typeParam', 'remarks']
        }
      ]
    }
  })
  .append(
    ...pluginYml.configs['flat/recommended'],
    ...pluginJsonc.configs['flat/recommended-with-json']
  );
