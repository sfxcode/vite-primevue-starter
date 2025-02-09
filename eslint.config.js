import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {
    ignores: ['*/shims-vue.d.ts'],
  },

  unocss.configs.flat,
  {
    rules: {
      'vue/no-mutating-props': ['error', {
        shallowOnly: true,
      }],
    },
  },
)
