import { mount } from '@cypress/vue'
import Footer from '@/components/Footer.vue'

describe('Footer', () => {
    it('renders a message', () => {
        const footerText = 'Hello Footer'
        // @ts-ignore
        mount(Footer, {
            propsData: {
                footerText
            }
        })

        cy.get('span').should('have.text', footerText)
    })
})
