import TodoApp from '../../src/widgets/AdvertiseBox.vue'
import {mount} from "@vue/test-utils";


describe('AdvertiseBox', () => {
    it('should display header text', () => {
        const header = 'Unit Test'
        const wrapper = mount(TodoApp, { props: { header } })

        expect(wrapper.find('.header-text').text()).toEqual(header)
    })
})
