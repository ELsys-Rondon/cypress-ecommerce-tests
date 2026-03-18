import LoginPage from "../pageObjects/loginPage"

describe("Login SauceDemo con POM", () => {

  it("Login exitoso usando POM y fixture", () => {

    const login = new LoginPage()

    cy.fixture("user").then((user) => {
      login.visit()
      login.login(user.username, user.password)  // usa la función login de la clase
    })

    cy.url().should("include", "inventory")       // verifica que llegó a la página
    cy.get(".title").should("contain", "Products")
  })

})
