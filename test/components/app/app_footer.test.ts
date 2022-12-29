import { mount } from '@vue/test-utils'
import { expect, test } from 'vitest'

import AppFooter from '../../../src/components/app/AppFooter.vue'

test('mount component', async () => {
  expect(AppFooter).toBeTruthy()

  const wrapper = mount(AppFooter, {})

  expect(wrapper.text()).toContain('Vite PrimeVue Starter')
})
