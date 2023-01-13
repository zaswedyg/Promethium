describe('Coding Test - QA Automation Engineer', () => {
  
  beforeEach('Go to http://promethium.ai/', () => {
    cy.visit('http://promethium.ai/')
  })


  it('Test case 1', () => {
    cy.get('[data-testid="linkElement"] img[alt*="Promehtium"]')
    cy.get('h1').should("have.text", 'Promethium Collaborative Data Analytics')
    cy.get('[id="comp-l5u6mahn4"]').should("have.text", 'Never miss an opportunity.')
  })
  it('Test case 2', () => {
    cy.contains('Try Now').invoke('removeAttr', 'target').click()
    cy.origin('https://onboarding.pm61data.cloud', () => {

    // Verify 'is required' alerts
    cy.contains('Sign Up').click()
    cy.contains('Email is required').should('have.attr', "role", "alert")
    cy.contains('First name is required').should('have.attr', "role", "alert")
    cy.contains('Last name is required').should('have.attr', "role", "alert")
    cy.contains('Company name is required').should('have.attr', "role", "alert")
    cy.contains('Job function is required').should('have.attr', "role", "alert")

    // Set the fields
    // Will need to delete user or change email after each run to run test multiple times
    cy.get('#UserRegister_root_user').type('email221@fake.com')
    cy.get('#UserRegister_first_name').type('firstname')
    cy.get('#UserRegister_last_name').type('lastname')
    cy.get('#UserRegister_company_name').type('Company Inc')
    cy.get('#UserRegister_job_function').click()
    cy.get('[title="Data Leader - Executive"').click()
    cy.contains('Sign Up').click()
    cy.url().should('include', 'user/confirmation?email=')
    cy.contains('Registration successful, subdomain created')
  })
  })
  it(':Test case 3', () => {
    // cy.get('#comp-jwtopy710').realHover()
    cy.get("#comp-jwtopy710 ul").invoke('show')
    cy.contains('Data Connectors').click()
    cy.url().should('include', '/promethium-data-connectors')
    cy.get('#comp-ktbxs380 [data-testid="linkElement"]').each((item) => {
      expect(item).to.be.visible
    })
    cy.get('#comp-ktbxs380').contains('Microsoft SQL Server')
    cy.get('#comp-ktbxs380').contains('MySQL')
    cy.get('#comp-ktbxs380').contains('PostgreSQL')
    cy.get('#comp-ktbxs380').contains('Teradata')
  })
})