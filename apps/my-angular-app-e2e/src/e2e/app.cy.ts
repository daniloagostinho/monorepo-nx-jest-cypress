describe('my-angular-app-e2e', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display a button and click it', () => {
    // Verifica se o botão está na tela
    cy.get('button').should('exist');

    // Clica no botão
    cy.get('button').click();

    // Verifica se algo mudou após o clique (exemplo: um texto aparecendo)
    cy.contains('Você clicou no botão!').should('exist');
  });
});
