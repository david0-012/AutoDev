describe('Inicio de Sesión', () => {
    it('Debería iniciar sesión con credenciales válidas', () => {
      // Visitar la página de inicio de sesión
      cy.visit('http://localhost:5173/auth/login');
  
      // Introducir el nombre de usuario y la contraseña
      cy.get('input[name="email"]').type('davidcasallas1202@gmail.com'); // Tagname + atributo
      cy.get('input[name="password"]').type('123456*'); // Tagname + atributo
  
      // Hacer clic en el botón de inicio de sesión
      cy.get('button[type="submit"]').click(); // Tagname + atributo
  
      // Verificar que el usuario ha iniciado sesión correctamente
      cy.url().should('include', 'http://localhost:5173/app/home'); // URL esperada
      cy.get('button[type="button"].text-primary') // Tagname + atributo + clase
      .should('be.visible'); // Verificar que el botón especificado es visible
    });
  });
  