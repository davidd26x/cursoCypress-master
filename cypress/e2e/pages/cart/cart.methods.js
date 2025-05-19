import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { CartElements } from "./cart.elements";

export class CartMethods {
  static clickOnDeleteLink(productName) {
    CartElements.links.delete(productName).click();
  }

  //Verificar producto añadido
  static verifyProductAdded(productName){
    CartElements.links.delete(productName).should('be.visible')
  }

  //Verificar que la página de carrito se muestre 
  static verifyCartPageIsDisplayed(){
    cy.url().should('include', 'cart.html')
  }

  static clickOnPlaceOrderButton(){
    CartElements.buttons.PlaceOrderButton.click();
  }

  static deleteProducts(){
    cy.get('a[onclick*="deleteItem"]').each(link=> {
      link.click();
      cy.wait(1000)
    })
  }

  static emptyCart(username, password){
    Logger.subStep('Navigate to Demoblaze website')
    CommonPageMethods.navigateToDemoBlaze();

    Logger.subStep('logout')
    CommonPageMethods.logout();

    Logger.subStep('Click on Home Option')
    CommonPageMethods.clickOnHomeOption();

    Logger.subStep('Click on Login Option')
    CommonPageMethods.clickOnLogInOption();

    Logger.subStep(`Login with credentials ${username} and ${password}`)
    LoginMethods.loginGlobal(username, password)

    Logger.subStep('Click on Cart Option')
    CommonPageMethods.clickOnCartOption();

    Logger.subStep('Deleting Products from cart')
    this.deleteProducts();

  }

}
