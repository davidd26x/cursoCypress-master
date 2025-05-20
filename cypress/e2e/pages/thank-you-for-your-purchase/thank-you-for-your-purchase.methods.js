import { ThankYouForYourPurchaseElements } from "./thank-you-for-your-purchase.elements";

export class ThankYouForYourPurchaseMethods {
  static clickOkButton() {
<<<<<<< HEAD
    cy.wait(1000)
=======
>>>>>>> 7992e27311f3fc70195a54f919bc6b501ba434a5
    ThankYouForYourPurchaseElements.buttons.okButton.click();
  }

  //Metodo de verificacion de icono verde
  static verifyGreenCheckMarkIsDisplayed() {
    ThankYouForYourPurchaseElements.icons.greenCheckMark.should("exist");
  }
}
