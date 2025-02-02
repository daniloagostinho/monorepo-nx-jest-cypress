describe('Login Test', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display error message on invalid login', () => {
    // Digita um e-mail inválido
    cy.get('#email').type('usuario@errado.com');
    
    // Digita uma senha errada
    cy.get('#password').type('senhaerrada');

    // Clica no botão de login
    cy.get('button').click();

    // Verifica se aparece a mensagem de erro
    cy.contains('Credenciais inválidas.').should('be.visible');
  });

  it('should login successfully with correct credentials', () => {
    // Digita o e-mail correto
    cy.get('#email').type('teste@teste.com');

    // Digita a senha correta
    cy.get('#password').type('123456');

    // Clica no botão de login
    cy.get('button').click();

    // Verifica se aparece a mensagem de sucesso
    cy.contains('Login bem-sucedido!').should('be.visible');
  });
});
