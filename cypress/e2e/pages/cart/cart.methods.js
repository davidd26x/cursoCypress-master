import { CartElements } from "./cart.elements";

export class CartMethods {
  static clickOnDeleteLink(productName) {
    CartElements.links.delete(productName).click();
  }

  //Verificar producto añadido
  static verifyProductAdded(){
    CartElements.links.delete(productName).should('be.visible')
  }
}
