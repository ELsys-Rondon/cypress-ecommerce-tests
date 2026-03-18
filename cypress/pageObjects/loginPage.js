class LoginPage {

  visit() {
    cy.visit("https://www.saucedemo.com")
  }

  login(username, password) {
    cy.get("#user-name").type(username)   // ingresa el usuario
    cy.get("#password").type(password)    // ingresa la contraseña
    cy.get("#login-button").click()       // hace clic en login
  }

}

export default LoginPage