import { CommonPageData } from "./common-page.data";
import { CommonPageElements } from "./common-page.elements";

export class CommonPageMethods {
  //Metodos que naveguen a la página
  static navigateToDemoBlaze() {
    cy.clearAllCookies();
    cy.clearLocalStorage();
    cy.visit(CommonPageData.url);
    CommonPageMethods.clickOnHomeOption();
  }

  static clickOnHomeOption() {
    //Al hacer click en la seccion Home del Menú de arriba
    CommonPageElements.topMenu.home.click();
  }

  static clickOnContactOption() {
    //Al hacer click en la seccion Contact del Menú de arriba
    CommonPageElements.topMenu.contact.click();
  }

  static clickOnAboutUsOption() {
    //Al hacer click en la seccion About Us del Menú de arriba
    CommonPageElements.topMenu.aboutUs.click();
  }

  static clickOnCartOption() {
    //Al hacer click en la seccion Cart del Menú de arriba
    CommonPageElements.topMenu.cart.click();
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false
    })
  }

  static clickOnLogInOption() {
    //Al hacer click en la seccion Log In del Menú de arriba
    CommonPageElements.topMenu.logIn.click();
  }

  static clickOnSignUpOption() {
    //Al hacer click en la seccion Sign Up del Menú de arriba
    CommonPageElements.topMenu.signUp.click();
  }

  //Nuevo metodo de arrojar alertas
  static verifyAlert(expectedMessage) {
    cy.on("window:alert", (str) => {
      expect(str).to.equal(expectedMessage);
    });
  }

  //Método creado en el vídeo 72 - Generando nombres de usuario aleatorios
static generateRandomString(length = 10) {
    let result = ' ';
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

//Método creado en vídeo 74 - prueba inicio de sesión válido
static verifySignedUser(username){
  CommonPageElements.signedUser.should('have.text', `Welcome ${username}`)
}

//Método para hacer logout
static logout(){
  cy.get('body').then($body=> {
    if($body.find('#logout2').lenght > 0){
      CommonPageElements.topMenu.logOut.click();
    }
  })
}
}
