describe('Logout', () => {
  it('devrait pouvoir se déconnecter', () => {
    cy.visit('/login')
    cy.get('input[name="login"]').type('MONLOGIN')
    cy.get('input[name="password"]').type('MONPASSWORD')
    cy.get('button[type="submit"]').click()
    cy.url().should('eq', Cypress.config().baseUrl + '/')
    cy.contains('Déconnexion').click()
    cy.contains('Déconnexion').should('not.exist')
  })
})
