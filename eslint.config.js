import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default antfu(
  {
    // Configures for antfu's config
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
