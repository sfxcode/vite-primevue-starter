// https://docs.cypress.io/api/introduction/api.html
describe('Homepage', () => {
  it('Shows correct text', () => {
    cy.visit('/')

    cy.contains('h2', 'Starter for Vue.js Development.')
  })
})
