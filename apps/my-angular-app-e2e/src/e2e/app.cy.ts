describe('Form Validation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should disable login button when fields are empty', () => {
    cy.get('#login-btn').invoke('attr', 'disabled').should('exist');
    cy.get('#login-btn').should('be.disabled');
  });

  it('should enable login button when both fields are filled', () => {
    cy.get('#email').type('teste@teste.com');
    cy.get('#password').type('123456');
  
    // Aguarda até que o botão seja habilitado
    cy.get('#login-btn').should('not.be.disabled');
  
    // Só clica depois que ele estiver habilitado
    cy.get('#login-btn').click();
  });
  

  it('should show error message when trying to submit empty form', () => {
    cy.get('#login-btn').click();
    cy.contains('Todos os campos são obrigatórios.').should('be.visible');
  });

  it('should enable login button when both fields are filled', () => {
    cy.get('#email').type('teste@teste.com');
    cy.get('#password').type('123456');
    cy.get('#login-btn').should('not.be.disabled');
  });
});
