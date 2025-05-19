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

}
